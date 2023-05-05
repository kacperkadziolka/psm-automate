<template>
    <div>
        <div class="car-data">
            <span>{{ reg_number }}</span>
            <!--
            <span>{{ lastOilChange }}</span>
            <div :class="{'color-box': true, 'red': oilChangeOverdue, 'green': !oilChangeOverdue}">
                <span>{{ oilChangeOverdue ? 'Overdue' : 'OK' }}</span>
            </div>
            -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CarComponentsInterval',
        props: {
            reg_number: String
        },
        computed: {
            oilChangeOverdue() {
                const oilChangeDueDate = new Date(
                    this.lastOilChange.getTime() + this.oilChangeInterval * 86400000
                );
                const now = new Date();
                return now > oilChangeDueDate;
            },
        },
    };

</script>

<style>
.car-data {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
}
.color-box {
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
}
.red {
  background-color: #ff4444;
}
.green {
  background-color: #00c851;
}
</style>