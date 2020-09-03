<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directive</h1>
                <p v-highlight>This is first and simple directive!!!</p>
                <p v-highlightByUser="'Orange'">This is second directive and the color has been entered by user!!!</p>
                <p v-highlightUsingArg:background="'Orange'">This is second directive and the color has been entered by user!!!</p>
                <p v-highlightUsingModifier:background.delayed="'Orange'">This is second directive and the color has been entered by user!!!</p>
                <p v-local-highlight:background.delayed="'Orange'">This is second directive and the color has been entered by user!!!</p>
            </div>
        </div>
    </div>
</template>local-highlight

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    let delayed = 0;
                    if(binding.modifiers['delayed']) {  //modifier is an object here so we can pass multiple using (dot) from html
                    delayed = 3000;
                    }

                    setTimeout(() => {
                    if(binding.arg === 'background') {  //here background is coming from html as args
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color = binding.value;
                    }
                    }, delayed)
                }
            }
        }
    }
</script>

<style>

</style>
