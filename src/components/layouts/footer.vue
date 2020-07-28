<template>
    <div class="">
        <div class="row mx-0 pb-2 pt-5 bg-white align-items-end" id="navbar-header-container">
            <div class="col-lg-4 d-none d-lg-block">
                <ul class="list-group list-group-horizontal justify-content-end align-items-center">
                    <li class="list-group-item border-0 px-1">
                        <label class="m-0 font-weight-light">MCJ Wine Cave © {{ new Date().getFullYear() }} All rights reserved.</label>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4">
                <div class="text-center">
                    <img src="http://luxurywine.themerex.net/wp-content/uploads/2017/01/logo.png" alt="Website Logo" width="250">
                </div>
            </div>
            <div class="col-lg-4 ">
                <ul class="list-group list-group-horizontal justify-content-start align-items-center">
                    <li class="list-group-item border-0 px-2">
                        <!-- <i class="las la-2x la-facebook-f primary-text"></i> -->
                        <!-- <span class="fa fa-facebook"></span> -->
                        <a target="_blank" href="https://www.facebook.com/winedistributorphilippines/"><i class="lab la-2x la-facebook-f text-mcj"></i></a>
                    </li>
                    <li class="list-group-item border-0 px-2">
                        <a href="#"><i class="lab la-2x la-instagram text-mcj"></i></a>
                    </li>
                    <li class="list-group-item border-0 px-2">
                        <a href="#"><i class="lab la-2x la-twitter text-mcj"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Footer'
    }
</script>
<style scoped>
    label {
        text-align: center;
        line-height: 50px;
    }
    i.lab {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #D4C499;
        text-align: center;
        line-height: 50px;
        /* vertical-align: middle; */
        /* padding: 30px; */
        cursor: pointer;
        transition: .3s;
    }
    i.lab:hover {
        border: 1px solid #D4C499;
        color: white !important;
        background: #D4C499 !important;
    }

    template {
        width: 100%;
    }

    #navbar-header-container {
        padding-bottom: 60px !important;
    }
</style>
