<template>
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
					<form @submit.prevent="handleSubmit">
						<span class="login100-form-title p-b-33">
							Account Login
						</span>

						<div class="wrap-input100">
							<input 
								class="input100" 
								type="text" 
								name="username" 
								placeholder="account"
								v-model="username"
							>
							<span class="focus-input100-1"></span>
							<span class="focus-input100-2"></span>
						</div>

						<div class="wrap-input100">
							<input 
								class="input100" 
								type="password" 
								name="password" 
								placeholder="password"
								v-model="password"
							>
							<span class="focus-input100-1"></span>
							<span class="focus-input100-2"></span>
						</div>

						<div class="container-login100-form-btn m-t-20">
							<button class="login100-form-btn">
								Sign in
							</button>
						</div>

						<div class="text-center">
							<span class="txt1">
								Create an account?
							</span>

							<a href="/register" class="txt2 hov1">
								Sign up
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
</template>

<script>

import axios from 'axios'

export default {
	data () {
		return {
			username: '',
			password: '',
			submitted: false
		}
	},
	methods: {
		handleSubmit () {
			this.submitted = false
			var account = JSON.parse(localStorage.getItem('account'))
			if (this.username === account.username && this.password === account.password) {
				console.log('login sucees')
			} else {
				axios.post('http://localhost:3000/getlogin', {
				username : this.username,
				password : this.password
				}).then(res => {
					console.log(res)
					if ( res.data.data === "false") {
						alert('login fail')
					} else {
						localStorage.setItem('account', JSON.stringify({
							username: this.username,
							password: this.password
						}))
					}
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
}
</script>

<style>

</style>