<template>
    <section>
        <Header/>
        <div class="content">
            001 - Home
        </div>
        <Footer/>
    </section>
</template>
<router>
  path: /home
</router>
<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
    layout: "001",

    components: {
        Header,
        Footer
    }
};
</script>
