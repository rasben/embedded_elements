(function($) {
    CKEDITOR.plugins.add( 'embedElement', {
        init: function( editor )
        {
            editor.addCommand( 'embedElement', {
                exec : function( editor ) {
                //here is where we tell CKEditor what to do.
                editor.insertHtml( 'This text is inserted when clicking on our new button from the CKEditor toolbar' );
                }
            });

            editor.ui.addButton( 'embedElementButton', {
                label: 'Do something awesome', //this is the tooltip text for the button
                command: 'embedElement',
                icon: this.path + '../images/embed_element_add.png'
            });
        }
    });
})(jQuery);