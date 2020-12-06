$('.checkbox').on('click', () => {
    if ($(':checkbox:checked').length === 3) {
        $('.checkbox').on('click', false);
    }
})