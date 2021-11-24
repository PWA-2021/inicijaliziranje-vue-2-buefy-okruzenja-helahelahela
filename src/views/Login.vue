<template>
    <div id="pozadina">
        <div id="sadrzaj">
            <div id="login">
                <h1>Log In</h1>
                <form class="prijava">
                <input type="email" class="log" placeholder="Enter E-mail" name="uname" required>

                <input type="password" class="log" placeholder="Enter Password" name="psw" required>

                <label for="checkbox" id="check"><input id="checkbox" type="checkbox" checked="checked" name="remember">Remember me</label>

                <a>Forgot your password?</a>

                <button type="submit" id="loginB"><router-link to="/"><h2 id="boja">Log In</h2></router-link></button>
                <button id="regC"><h2 id="boja2">Register</h2></button>
                <label>
                </label>
                </form>
            </div>
            <div id="slika">
                <button id="regB"><h2 id="boja2">Register</h2></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>

<script>
</script>
