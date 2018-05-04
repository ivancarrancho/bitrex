
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function getBrowser(target, dataDir) {
    dataDir = dataDir || 'temp_chrome_user_data_dir_for_cordova';

    var chromeArgs = ' --user-data-dir=/tmp/' + dataDir + ' --disable-web-security';
    };

$(document).ready(function(){
    $(".btn").click(function(){

        $.ajax({
            url: 'https://bittrex.com/api/v1.1/public/getmarkets',
            dataType: 'text',
            type: 'post',
            data: $(this).serialize(),
            success: function( data ){
                alert('Comunicacion correcta');
                $('.info').text(data);
                $('.info1').text(data['BaseCurrencyLong']);
                $('.info2').text(data['MinTradeSize']);
            },
            error: function( errorThrown ){
                alert('Comunicacion con error');
                console.log( errorThrown );
            }
        });

    });
});


// key
// 89ba03b16f364dd7aa4582a70055a243
// value
// 3f76e63b984340a2ba270339cdfb2619

app.initialize();