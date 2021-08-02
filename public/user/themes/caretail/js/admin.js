/* Regenerate post slug based on publish date */
const Regenerate2 = (field = '[name="data[header][slug]"]') => {
    const element = jQuery(field);
    const title = jQuery('[name="data[header][title]"]');
    const publishDate = jQuery('[name="data[header][date]"]');
    if (publishDate) {
        let pubDate = publishDate.val().trim();
        if (pubDate !== "") {
            const parts = pubDate.split(' ');
            const dateParts = parts[0].split('/');
            const slugDate = parseInt(dateParts[2]) + '-' +parseInt(dateParts[0]) + '-' +parseInt(dateParts[1]);
            const slug = jQuery.slugify(slugDate + "-" + title.val(), {custom: {"'": ''}});
            element.addClass('highlight').val(slug);
            setTimeout(() => element.removeClass('highlight'), 500);
        } else {
            alert("Please select a publish date first");
        }
    } else {
        alert("Unable to find publish date field.");
    }
};

jQuery(document).on('click', '[data-regenerate-post-slug]', (event) => {
    const target = jQuery(event.currentTarget);
    const field = jQuery(target.data('regenerate-post-slug'));

    Regenerate2(field);
});