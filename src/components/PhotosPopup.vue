<template>
    <div class="popup-container" v-show="showPopup">
        <div class="popup">
            <h2>Photos of your car with registration number: {{ reg_number }}</h2>
            <div class="photos">
                <img v-for="(photo, index) in photos" :key="index" :src="photo.url" />
            </div>
            <button @click="closePopup">Close</button>
        </div>
    </div>
</template>

<script>
    import { storage } from "../firebase";
    import { ref, listAll, getDownloadURL } from "firebase/storage";

    export default {
        name: 'PhotosPopup',
        props: {
            showPopup: {
                type: Boolean,
                default: false
            },
            reg_number: String
        },
        data() {
            return {
                photos: []
            }
        },
        methods: {
            closePopup() {
                this.$emit("close-popup");
            }
        },
        async created() {
            try {
                const storageRef = ref(storage, `cars/${this.reg_number}`);
                const images = await listAll(storageRef);
                images.items.forEach(async (imageRef) => {
                    const url = await getDownloadURL(imageRef);
                    this.photos.push({ url });
                });
            } 
            catch (error) {
                console.error(error);
            }
        }
    }
</script>

<style scoped>
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
}
h2 {
  margin-top: 0;
}
.photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.photos img {
  width: 200px;
  margin: 10px;
  object-fit: cover;
}
button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #0069d9;
}
</style>