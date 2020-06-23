<template>
    <div>
        <p>master 002</p>
        <Nuxt />
    </div>
</template>
<script>
export default {
    layout: "002",
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" }
        ],
        link: [
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Roboto"
            }
        ]
    }
};
</script>
