<script>
    import items from './Items.json'
    let coolItem = Math.floor(Math.random() * items.length)
    var item = items[coolItem];
</script>

<div class="centerer">
    <p>
        {item}
    </p>
</div>
