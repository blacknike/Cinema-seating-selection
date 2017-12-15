var price = 32; //Price 
$(document).ready(function() { 
    var $cart = $('#selected-seats'), //Seats 
    $counter = $('#counter'), //Num of tickets
    $total = $('#total'); //Total amount
     
    var sc = $('#seat-map').seatCharts({ 
        map: [  //Seat maps 
            'aaaaaaaaaa', 
            'aaaaaaaaaa', 
            'aaaaaaaaaa', 
            'aaaaaaaaaa', 
            'aaaaaaaaaa', 
            'aaaaaaaaaa', 
            'aaaaaaaaaa', 
            'aaaaaaaaaa', 
            'aaaaaaaaaa', 
            'aa__aa__aa' 
        ], 
        legend : { //Legend
            node : $('#legend'), 
            items : [ 
                [ 'a', 'available',   'Available' ], 
                [ 'a', 'unavailable', 'Sold'] 
            ]                     
        }, 
        click: function () { 
            if (this.status() == 'available') { //Available seats
                $('<li>'+(this.settings.row+1)+'Row'+this.settings.label+'Seat</li>') 
                    .attr('id', 'cart-item-'+this.settings.id) 
                    .data('seatId', this.settings.id) 
                    .appendTo($cart); 
 
                $counter.text(sc.find('selected').length+1); 
                
                $total.text(Totalamount(sc)+price); 
                             
                return 'selected'; 
            } else if (this.status() == 'selected') { //Selected seats 
                
                $counter.text(sc.find('selected').length-1); 
                
                $total.text(Totalamount(sc)-price); 
                         
                 
                $('#cart-item-'+this.settings.id).remove(); 
                
                return 'available'; 
            } else if (this.status() == 'unavailable') { //Sold 
                return 'unavailable'; 
            } else { 
                return this.style(); 
            } 
        } 
    }); 
    //Sold 
    sc.get(['2_3', '2_4','4_5','7_1','7_2','9_4','9_5','9_6','9_7', '10_5', '10_6']).status('unavailable'); 
         
}); 
//Total amount
function Totalamount(sc) { 
    var totalamount = 0; 
    sc.find('selected').each(function () { 
        totalamount += price; 
    }); 
             
    return totalamount; 
} 