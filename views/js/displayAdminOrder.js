$(document).ready(function() {

    // Retrieve data
    var sellermania_title = $('#sellermania-template-title').html();
    var sellermania_customer = $('#sellermania-template-customer').html();
    var sellermania_order_summary = $('#sellermania-template-order-summary').html();

    // Replace status order selection
    $('#content div div form #id_order_state').after(sellermania_title);
    $('#content div div form #id_order_state').hide();
    $('#content div div form input[name="submitState"]').hide();

    // Replace status order selection
    $('#content div div fieldset:first').html(sellermania_customer);

    // Replace right column
    var order_buttons = '<div class="button-command-prev-next">' + $('.button-command-prev-next').html() + '</div><div class="clear"></div>';
    $('.button-command-prev-next').parent().html(order_buttons + sellermania_order_summary);

    // Hide address block
    $('.container-command:first').next().hide();

    // Hide "Add product" button
    $('.add_product').parent().hide();

    // Hide discount block
    $('#total_products').parent().parent().parent().next().next().hide();

    // Hide message thread customer block
    $('.add_product').parent().parent().parent().parent().next().next().hide();


    // Fill product details
    var sellermania_order_line = 0;
    $('#orderProducts tr').each(function() {
        if (sellermania_order_line > 0)
        {
            var sellermania_order_row = 0;
            $(this).find('td').each(function() {
                if (sellermania_order_row == 1 && $(this).is(':visible'))
                {
                    var sku = $(this).html().split('<br>');
                    sku = sku[1].replace('Ref: ', '').trim();

                    var html_order_line = $(this).html();
                    html_order_line += 'Condition: ' + sellermania_products[sku].item_condition + '<br>';
                    html_order_line += 'Status: ' + sellermania_products[sku].status + '<br>';
                    $(this).html(html_order_line);
                }
                sellermania_order_row++;
            });
        }
        sellermania_order_line++;
    });
});