<template>
    <div class="car-details">

        <div v-if="car" class="car-info">
            <h1>Maitenance Data</h1>
            <h4>{{ car.make }} {{ car.model }}</h4>
        </div>

        <CarComponentsInterval :reg_number="this.reg_number" />

        <div class="car-photos">
            <button v-if="hasPhotos" @click="showPopup=true">View Photos</button>
            <photos-popup :show-popup="showPopup" :reg_number="this.reg_number" @close-popup="showPopup = false" />

            <button @click="openModal">Add Photo</button>

            <div class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Take a photo</h5>
                            <button type="button" class="hideButton">
                            </button>
                        </div>
                        <div class="modal-body">
                            <video id="video" width="100%" height="auto" autoplay></video>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                            <button type="button" class="btn btn-primary" @click="takePhoto">Take Photo</button>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>

</template>

<script>
    import { collection, getDocs } from "firebase/firestore"
    import { onMounted } from "vue";
    import { db, storage } from "../firebase";
    import { ref, listAll, uploadBytes } from "firebase/storage";

    import PhotosPopup from "./PhotosPopup.vue";
    import CarComponentsInterval from "./CarComponentsInterval.vue";

    export default {
        name: 'CarDetails',
        props: {
            reg_number: String
        },
        components: {
            PhotosPopup,
            CarComponentsInterval
        },
        data() {
            return {
                car: null,
                hasPhotos: false,
                showPopup: false,
                photos: []
            }
        },
        created() {
            const unsubscribe = onMounted(async () => {
                const querySnapshot = await getDocs(collection(db, "cars"));
                querySnapshot.forEach((doc) => {
                    const carData = doc.data();
                    if (carData.reg_number === this.reg_number) {
                        this.car = carData;
                    }
                });
            })

            const unsubscribePhotos = onMounted(async () => {
                const photoRef = ref(storage, `cars/${this.reg_number}`);
                const photoList = await listAll(photoRef);
                if (photoList.items.length > 0) {
                    this.hasPhotos = true;
            }
            })
        },
        methods: {
            openModal() {
                const modal = document.querySelector(".modal");
                modal.style.display = "block";

                this.video = document.getElementById("video");
                navigator.mediaDevices
                    .getUserMedia({ video: true })
                    .then((stream) => {
                        this.mediaStream = stream;
                        this.video.srcObject = stream;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            takePhoto() {
                const canvas = document.createElement("canvas");
                canvas.width = this.video.videoWidth;
                canvas.height = this.video.videoHeight;
                canvas.getContext("2d").drawImage(this.video, 0, 0);
                canvas.toBlob(async (blob) => {
                    const photoRef = ref(storage, `cars/${this.reg_number}/${Date.now()}.png`);
                    await uploadBytes(photoRef, blob);
                    this.closeModal();
                }, "image/png", 1);
            },
            closeModal() {
                const modal = document.querySelector(".modal");
                modal.style.display = "none";
            },
            }
        }
</script>

<style scoped>
.car-photos {
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 50px;
    background-color: #f5f5f5;
}
.car-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    overflow: auto;
  }
  .car-info {
    text-align: center;
    margin-bottom: 20px;
  }
  .car-photos {
    margin-top: 20px;
  }
  .car-photos button {
    margin-right: 10px;
    margin-left: 10px;
}
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .hideButton {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
  .hideButton:hover {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background-color: #0069d9;
  }
</style>