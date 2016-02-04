(function() {
    $('#forms').submit(function() {
				$.fn.serializeObject = function()
				{
						var o = {};
						var a = this.serializeArray();
						$.each(a, function() {
								if (o[this.name] !== undefined) {
										if (!o[this.name].push) {
												o[this.name] = [o[this.name]];
										}
										o[this.name].push(this.value || '');
								} else {
										o[this.name] = this.value || '';
								}
						});
						return o;
				};
        var applicantData = JSON.stringify($('#forms').serializeObject());
        $.ajax({
          type: 'POST',
          url: 'https://api.parse.com/1/classes/captureyousignups',
          dataType: 'json',
          data: applicantData,
          headers: {

            'X-Parse-REST-API-Key': 'I6WvDKAtJnGHwlbfGiCKUlmyB0xuj9XfhLjv813O',
            'X-Parse-Application-Id': '6eZz3oxROzziUAGnpCzt2S0Xe017IZdRDXTo4FKy'
          },
          success: function (data) {
                window.location = '/thankyou.html';
          }
             });
             return false;
          });
          $('#formsphoto').submit(function() {
      				$.fn.serializeObject = function()
      				{
      						var o = {};
      						var a = this.serializeArray();
      						$.each(a, function() {
      								if (o[this.name] !== undefined) {
      										if (!o[this.name].push) {
      												o[this.name] = [o[this.name]];
      										}
      										o[this.name].push(this.value || '');
      								} else {
      										o[this.name] = this.value || '';
      								}
      						});
      						return o;
      				};
              var applicantData = JSON.stringify($('#formsphoto').serializeObject());
              $.ajax({
                type: 'POST',
                url: 'https://api.parse.com/1/classes/capturephotographers',
                dataType: 'json',
                data: applicantData,
                headers: {

                  'X-Parse-REST-API-Key': 'I6WvDKAtJnGHwlbfGiCKUlmyB0xuj9XfhLjv813O',
                  'X-Parse-Application-Id': '6eZz3oxROzziUAGnpCzt2S0Xe017IZdRDXTo4FKy'
                },
                success: function (data) {
                      window.location = '/';
                }
                   });
                   return false;
                });
    })();
