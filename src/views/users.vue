<template id="">
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">

                        <div class="row">
                            <div class="col-md-6">
                                <h5 class="mb-0 card-title">User Management</h5>
                                <hr class="my-1" style="border-top: 3px solid #8c8b8b;" width="40px" align="left">
                                <div class="clearfix"></div><br>
                            </div>
                        </div>

                        <!-- <div class="row">
                            <div class="col-md-12"> -->
                                <div class="table-responsive">
                                    <table class="table datatable">
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <!-- <th>Password</th> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- <tr>
                                                <td>User</td>
                                                <td>Email</td>
                                                <td>Role</td>
                                            </tr> -->
                                        </tbody>
                                    </table>
                                </div>

                            <!-- </div>
                        </div> -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script>
// const $ = require('jquery');

export default {
    name: "login",
    data: () => ({
        notif: '',
    }),

	created () {
        console.clear();
        console.log(localStorage.getItem('token'));
        // $('.datatable').DataTable();
		// this.getUsers ()
        // console.log(this.isLoggedIn);
    },
    mounted(){
        // alert('');
        // this.getUsers()
        this.initDatatable()
        // $('.datatable').DataTable();
    },
    methods: {

        initDatatable() {
            $('.datatable').DataTable({
                // ajax: {
                //     url: this.$store.state.app_url + 'sample',
                //     dataSrc: 'results'
                // },
                // columns: [
                //     { data: 'first_name' },
                //
                // ]
                processing: true,
                serverSide: true,
                ajax: {
                    "url": this.$store.state.app_url + 'user/search',
                    "dataType": 'json',
                    "type": 'Get',

                    "beforeSend": function (xhr) {
                        xhr.setRequestHeader('Authorization',
                        "Bearer " + localStorage.getItem('token'));
                    },
                    "dataSrc": function ( json ) {
                        //Make your callback here.
                        // alert("Done!");
                        console.log(json.data.original.data);
                        return json.data.original.data;
                    }
                },
                // ajax: this.$store.state.app_url + 'user/search',
                // function(d) { d.data = "data"; },
                columns: [
                    { data: 'username', name: 'username' },
                    // { data: 'email', name: 'email' },
                ]
            });
        },
        getUsers () {
            // alert(localStorage.getItem('token'));
            this.axiosRequest ('GET', this.$store.state.app_url + 'user/search')
            .then (res => {
                if(res.data.status.toString() == 'success'){
                    // console.clear();
                    // console.log(res.data);
                    this.rows = res.data.data;
                } else {
                    this.notif = res.data;
                }
            })
            .catch (err => {
                console.log (err);
                this.users_loading = false
            })
        },
    },

}
</script>
