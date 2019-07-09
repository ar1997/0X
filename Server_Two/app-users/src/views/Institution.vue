<template>
	<div>
	
        <h1 class="title">Registered Users</h1>

        <div class="clearfix"></div>

        <h2 v-show="!bcConnected">Not connected to the blockchain: please wait.</h2>

        <h2 v-show="(isLoading && bcConnected)">Loading...</h2>
        <h3>Enter the unique ID</h3>
        <div>
        <input v-model="uid" placeholder="Unique ID">
        <button class="btn btn-primary float mt-1" @click="reloadList">Search</button>
	    </div>
        <!--<p>Message is: {{ message }}</p>-->
        <br/>
        <div style="border:2px solid gray;padding-left:8px;padding-right:8px;padding-top:8px;">
        <table v-show="!isLoading">
            <thead class="thead-dark">
                <tr>

                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    
                    <p  v-if="user[0]==uid">Unique ID :{{ user[0].toNumber() }}</p>
                    <p  v-if="user[0]==uid">IPFS HASH :</p>
                    
                    <textarea v-if="user[0]==uid">{{ user[1] }}</textarea>

                    
                    <p  v-if="user[0]==uid">Current Status :{{ toAscii(user[2]) }}</p>
                    <p  v-if="user[0]==uid">Wallet Address :{{ user[3] }}</p>
                    <p  v-if="user[0]==uid">Created :{{ toDate( user[4].toNumber() ) }}</p>
                    <p  v-if="user[0]==uid">Updated :{{ toDate( user[5].toNumber() ) }}</p>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
    // importing common function
    import mixin from '../libs/mixinViews';

    /**
     * List view component: this component shows list of the registered users
     * and their statuses.
     */
    export default {
        mixins: [mixin],

        data() {
            return {
                users: [], // array that stores all the registered users
                isLoading: true, // true when the user list is loading form the blockchain
                bcConnected: false, // blockchain is connected ()
                tmoConn: null, // contain the intervalID given by setInterval
            }
        },

        methods: {
            /**
             * Get the list of the registered users once the connection to the
             * blockchain is established.
             */
            getUserList() {
                if (this.blockchainIsConnected()) {
                    // it shows the loading message
                    this.isLoading = true;

                    // stopping the interval
                    clearInterval(this.tmoConn);

                    // getting all the users from the blockchain
                    this.getAllUsers(userProfile => {
                        this.isLoading = false;
                        this.users.push(userProfile);
                    })
                }
            },

            /**
             * It reloads the user list.
             */
            reloadList() {
                this.users = [];

                this.getUserList();
            },

			/**
			 * Get all users.
			 */
			getAllUsers(callback) {
				// getting the total number of users stored in the blockchain
				// calling the method totalUsers from the smart contract
				window.bc.contract().totalUsers((err, total) => {
                    var tot = 0;
					if (total) tot = total.toNumber();

					if (tot > 0) {
						// getting the user one by one
						for (var i=1; i<=tot; i++) {
                            // if(uid !== users[i].userId) {
                            //     continue;
                            // }
							window.bc.contract().getUserById.call(i, (error, userProfile) => {
								callback(userProfile);
                            });
						} // end for
					} // end if
				}); // end totalUsers call
			}

        }, // end methods

        created() {
            // it tries to get the user list from the blockchian once
            // the connection is established
            this.tmoConn = setInterval(() => {
                this.getUserList();
            }, 1000);
        }
    }
</script>

<style>
</style>
