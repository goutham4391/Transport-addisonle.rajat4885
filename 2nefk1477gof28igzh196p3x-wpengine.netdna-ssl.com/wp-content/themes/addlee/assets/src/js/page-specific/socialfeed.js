jQuery(document).ready(function ($) {
    // Twitter feed
    $('.social-feed-container').socialfeed({

        // TWITTER
        twitter:{
            accounts: ['@addisonleecabs'],
            limit: 5,
            consumer_key: '1v95dfbgj8OVZ8qCt6VbNzeFn', // make sure to have your app read-only
            consumer_secret: 'N9JTJYLBIKnmQj8N4J9irMzuUkLC9Hq2C5UqjOK14xohtzBFD7', // make sure to have your app read-only
        },

        // GENERAL SETTINGS
        length:400,
        show_media:true,
        // Moderation function - if returns false, template will have class hidden
        moderation: function(content){
            return  (content.text) ? content.text.indexOf('fuck') == -1 : true;
        },
        //update_period: 5000,
        // When all the posts are collected and displayed - this function is evoked
        callback: function(){
            console.log('all posts are collected');
        }
    });
});