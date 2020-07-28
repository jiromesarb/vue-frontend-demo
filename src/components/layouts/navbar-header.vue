<template>
    <div class="">
        <div class="row mx-0 pb-2 pt-5 bg-white align-items-end" id="navbar-header-container">
            <div class="col-lg-4 d-none d-lg-block">
                <ul class="list-group list-group-horizontal justify-content-end align-items-center">
                    <li class="list-group-item border-0 px-1">
                        <i class="las la-2x la-phone text-mcj-primary"></i>
                    </li>
                    <li class="list-group-item border-0 px-1">
                        <label class="m-0"><b>Call us: 123-456-7890</b></label>
                        <br>
                        <label class="m-0 font-weight-light">info@luxurywine.com</label>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4">
                <div class="text-center">
                    <img src="http://luxurywine.themerex.net/wp-content/uploads/2017/01/logo.png" alt="Website Logo" width="300">
                </div>
            </div>
            <div class="col-lg-4 ">
                <ul class="list-group list-group-horizontal justify-content-start align-items-center">
                    <li class="list-group-item border-0 px-1">
                        <i class="las la-2x la-shopping-bag text-mcj-primary"></i>
                    </li>
                    <li class="list-group-item border-0 px-1">
                        <label class="m-0"><b>Your Cart:</b></label>
                        <br>
                        <label class="m-0 text-mcj-primary">0 Items - &#x20B1; 0.00</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Navbar-Header'
    }
</script>
<style scoped>
    template {
        width: 100%;
    }

    #navbar-header-container {
        padding-bottom: 60px !important;
    }
</style>
