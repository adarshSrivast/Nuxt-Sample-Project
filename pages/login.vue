<template>
    <div class="mx-auto">
        <h1 class="font-bold">Login to your account</h1>

        <form @submit="onSubmit">
            <label for="email">Email address: </label>
            <input type="email" placeholder="Enter email" id="email" v-model="email" v-bind="emailAttributes">
            <div class="errorMsg">{{ errors.email }}</div>

            <label for="password">Password: </label>
            <input type="password" placeholder="Enter password" id="password" v-model="password" v-bind="passAttributes">
            <div class="errorMsg">{{ errors.password }}</div>
            
            <button :disabled="!meta.valid">Login</button>
        </form>
        
    </div>
</template>

<script setup>
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';
    const schema = yup.object({
        email : yup.string().required('Email can not be empty').email('Invalid email'),
        password : yup.string()
                    .required('Password can not be empty')
                    .min(8, 'Password must be atleast 8 characters long')
                    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                    .matches(/[0-9]/, 'Password must contain at least one integer')
                    .matches(/[^\w]/, 'Password must contain at least one special character'),
    });
    
    const { values, errors, defineField, meta, handleSubmit} = useForm({
        validationSchema: schema,
    });


    const [email, emailAttributes] = defineField('email',{
        validateOnModelUpdate : false,
    });

    const [password, passAttributes] = defineField('password',{
        validateOnModelUpdate : false ,
    });

    const { data : userDetails } = await useFetch('api/login');
    
    const onSubmit = handleSubmit(values => {
        console.log(userDetails._rawValue);
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                email: values.email,
                password: values.password,
                // expiresInMins: 60, // optional
            })
        })
            .then(res => res.json())
            .then(console.log);
        })
</script>

<style scoped>
div{
    max-width: 50vw;
}

label{
    display: block;
    margin-top: 20px;
}

input{
    
    border: 1px solid black;
    width: 100%;
}

button{
    margin-top: 20px;
    background-color: rgb(161, 161, 161);
    padding: 5px;
}

.errorMsg{
    color: red;
}

</style>