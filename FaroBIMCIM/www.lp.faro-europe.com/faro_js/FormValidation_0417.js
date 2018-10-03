/* Start of Default Validation Script */

jQuery(document).ready(function(){
                CountrySelect();
})


function CountrySelect(){

var selCountry = "";
jQuery('#C_State_Prov').val('');

if(jQuery('[name=Country]').length > 0)
{
    selCountry = jQuery('[name=Country]').val();

}
else 
{
  selCountry = jQuery('[name=AP_CN_C_Country]').val();

}
 



if (selCountry == "India") {
        jQuery('#div_AP_SP_India:hidden').fadeIn("fast");
        jQuery('#div_lclProvince:visible').hide("fast");
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
        jQuery('#C_State_Prov').val( jQuery('#AP_SP_India').val() );
		jQuery('#AP_SP_India').attr("required", "");
		jQuery('#AP_SP_India').change(function(){
		jQuery('#C_State_Prov').val(jQuery(this).val());
		});
         jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
    }
	else
	{
        jQuery('#AP_SP_India').removeAttr("required");
	}
	
    if ((selCountry == "USA") || (selCountry == "United States")) {
        jQuery('#div_lclState:hidden').fadeIn('fast');
        jQuery('#div_lclProvince:visible').hide("fast");
        jQuery('#div_AP_SP_India:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
        jQuery('#C_State_Prov').val( jQuery('#lclState').val() );
		jQuery('#lclState').attr("required", "");
		jQuery('#lclState').change(function(){
			jQuery('#C_State_Prov').val(jQuery(this).val());
		});
         jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
    }
	else
	{
        jQuery('#lclState').removeAttr("required");
	}


    if (selCountry == "Canada") {
        jQuery("#div_lclProvince:hidden").fadeIn("fast");
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_India:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
        jQuery('#C_State_Prov').val( jQuery('#lclProvince').val());
		jQuery('#lclProvince').attr("required", "");
		jQuery('#lclProvince').change(function(){
			jQuery('#C_State_Prov').val(jQuery(this).val());
		});
         jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
    }
	else
	{
        jQuery('#lclProvince').removeAttr("required");
	}

    if (selCountry == "China") {
        jQuery('#div_AP_SP_China:hidden').fadeIn("fast");
        jQuery("#div_lclProvince:visible").hide("fast");
	    jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_India:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
	jQuery('#area_detail_right').css("margin-top", "17px");
	jQuery('#C_Salutation_2843').prop("checked",false);
	jQuery('#C_Salutation_2844').prop("checked",false);
	jQuery('#div_C_Salutation:visible').css("cssText" , "display:none !important;");
        jQuery('#C_State_Prov').val( jQuery('#AP_SP_China').val());
		jQuery('#AP_SP_China').attr("required", "");
		jQuery('#AP_SP_China').change(function(){
			jQuery('#C_State_Prov').val(jQuery(this).val());
		});
         jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
    }
	else
	{
        jQuery('#AP_SP_China').removeAttr("required");
	}

    if (selCountry == "Japan") {
        jQuery('#div_AP_SP_Japan:hidden').fadeIn("fast");
        jQuery("#div_lclProvince:visible").hide("fast");
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_India:visible').hide("fast");
	jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
	jQuery('#area_detail_right').css("margin-top", "17px");
	jQuery('#C_Salutation_2843').prop("checked",false);
	jQuery('#C_Salutation_2844').prop("checked",false);
	jQuery('#div_C_Salutation:visible').css("cssText" , "display:none !important;");
        jQuery('#C_State_Prov').val( jQuery('#AP_SP_Japan').val());
		jQuery('#AP_SP_Japan').attr("required", "");
		jQuery('#AP_SP_Japan').change(function(){
			jQuery('#C_State_Prov').val(jQuery(this).val());
		});
         jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
		}
	else
	{
        jQuery('#AP_SP_Japan').removeAttr("required");
	}

    if (selCountry == "South Korea") {
        jQuery('#div_AP_SP_Korea:hidden').fadeIn("fast");
        jQuery("#div_lclProvince:visible").hide("fast");
        jQuery('#div_lclState:visible').hide("fast");
	    jQuery('#div_AP_SP_India:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast"); 
	jQuery('#area_detail_right').css("margin-top", "17px");
	jQuery('#C_Salutation_2843').prop("checked",false);
	jQuery('#C_Salutation_2844').prop("checked",false);
	jQuery('#div_C_Salutation:visible').css("cssText" , "display:none !important;");	
	jQuery('#C_State_Prov').val( jQuery('#AP_SP_Korea').val());
	jQuery('#AP_SP_Korea').attr("required", "");
	jQuery('#AP_SP_Korea').change(function(){
			jQuery('#C_State_Prov').val(jQuery(this).val());
		});
        jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
    }
	else
	{
        jQuery('#AP_SP_Korea').removeAttr("required");
	}

   if (selCountry == "Australia") {
        jQuery('#div_AP_SP_India:hidden').hide("fast");
        jQuery("#div_lclProvince:visible").hide("fast");
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
        jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Australia:hidden').fadeIn("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
        jQuery('#C_State_Prov').val( jQuery('#AP_SP_Australia').val());
		jQuery('#AP_SP_Australia').attr("required", "");
		jQuery('#AP_SP_Australia').change(function(){
			jQuery('#C_State_Prov').val(jQuery(this).val());
		});
    }
	else
	{
        jQuery('#AP_SP_Australia').removeAttr("required");
	}


     if (selCountry == "New Zealand") {
        jQuery('#div_AP_SP_India:hidden').hide("fast");
        jQuery("#div_lclProvince:visible").hide("fast");
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
        jQuery('#div_AP_SP_NewZealand:hidden').fadeIn("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
        jQuery('#C_State_Prov').val( jQuery('#AP_SP_NewZealand').val());
		jQuery('#AP_SP_NewZealand').attr("required", "");
		jQuery('#AP_SP_NewZealand').change(function(){
			jQuery('#C_State_Prov').val(jQuery(this).val());
		});
    }
	else
	{
        jQuery('#AP_SP_NewZealand').removeAttr("required");
	}
			   
     if (selCountry == "Thailand") {
        jQuery('#div_AP_SP_India:visible').hide("fast");
        jQuery('#div_lclProvince:visible').hide("fast");
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
        jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:hidden').fadeIn("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
		jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
        jQuery('#C_State_Prov').val( jQuery('#AP_SP_Thailand').val());
		jQuery('#AP_SP_Thailand').attr("required", "");
		jQuery('#AP_SP_Thailand').change(function(){
		jQuery('#C_State_Prov').val(jQuery(this).val());
		});
    }
	else
	{
        jQuery('#AP_SP_Thailand').removeAttr("required");
	}
	
     if (selCountry == "Malaysia") {
        jQuery('#div_AP_SP_India:visible').hide("fast");
        jQuery('#div_lclProvince:visible').hide("fast");
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
        jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:hidden').fadeIn("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
        jQuery('#C_State_Prov').val( jQuery('#AP_SP_Malaysia').val());
		jQuery('#AP_SP_Malaysia').attr("required", "");
		jQuery('#AP_SP_Malaysia').change(function(){
		jQuery('#C_State_Prov').val(jQuery(this).val());
		});
    }
	else
	{
        jQuery('#AP_SP_Malaysia').removeAttr("required");
	}
	
     if (selCountry == "Indonesia") {
        jQuery('#div_AP_SP_India:visible').hide("fast");
        jQuery('#div_lclProvince:visible').hide("fast");
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
        jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:hidden').fadeIn("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
        jQuery('#C_State_Prov').val( jQuery('#AP_SP_Indonesia').val());
		jQuery('#AP_SP_Indonesia').attr("required", "");
		jQuery('#AP_SP_Indonesia').change(function(){
		jQuery('#C_State_Prov').val(jQuery(this).val());
		});
    }
	else
	{
        jQuery('#AP_SP_Indonesia').removeAttr("required");
	}
	
     if (selCountry == "Vietnam") {
        jQuery('#div_AP_SP_India:visible').hide("fast");
        jQuery('#div_lclProvince:visible').hide("fast");
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");
        jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:hidden').fadeIn("fast");
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#C_State_Prov').val( jQuery('#AP_SP_Vietnam').val());
		jQuery('#AP_SP_Vietnam').attr("required", "");
		jQuery('#AP_SP_Vietnam').change(function(){
		jQuery('#C_State_Prov').val(jQuery(this).val());
		});
    }
	else
	{
        jQuery('#AP_SP_Vietnam').removeAttr("required");
	}




if ((selCountry == "Hong Kong") && (selCountry == "Taiwan") && (selCountry == "Macau")) {
      jQuery('#div_AP_SP_China:visible').hide("fast");  
    }




    if (selCountry != "Canada") {
        jQuery('#lclState').value = "";
    }
    if ((selCountry != "USA") && (selCountry != "United States")) {
        jQuery('#lclState').value = "";
    }

    if (selCountry != "India") {
        jQuery('#lclState').value = "";
    }

    if (selCountry != "China") {
        jQuery('#lclState').value = "";
    }

    if (selCountry != "Japan") {
        jQuery('#lclState').value = "";
    }

    if (selCountry != "South Korea") {
        jQuery('#lclState').value = "";
    }

  if (selCountry != "New Zealand") {
        jQuery('#lclState').value = "";
    }

    if (selCountry != "Australia") {
        jQuery('#lclState').value = "";
    }
	
    if (selCountry != "Thailand") {
        jQuery('#lclState').value = "";
    }

    if (selCountry != "Malaysia") {
        jQuery('#lclState').value = "";
    }

  if (selCountry != "Indonesia") {
        jQuery('#lclState').value = "";
    }

    if (selCountry != "Vietnam") {
        jQuery('#lclState').value = "";
    }

    if ((selCountry != "USA") && (selCountry != "United States") && (selCountry != "Canada") && (selCountry != "China") && (selCountry != "India") && (selCountry != "Japan") && (selCountry != "South Korea") && (selCountry != "Australia") && (selCountry != "New Zealand") && (selCountry != "Thailand") && (selCountry != "Malaysia") && (selCountry != "Indonesia") && (selCountry != "Vietnam")) {
        jQuery('#div_lclState:visible').hide("fast");
        jQuery('#div_lclProvince:visible').hide("fast");
        jQuery('#div_AP_SP_India:visible').hide("fast");
        jQuery('#div_AP_SP_China:visible').hide("fast");
        jQuery('#div_AP_SP_Japan:visible').hide("fast");
        jQuery('#div_AP_SP_Korea:visible').hide("fast");	
        jQuery('#div_AP_SP_Australia:visible').hide("fast");
        jQuery('#div_AP_SP_NewZealand:visible').hide("fast");
        jQuery('#div_AP_SP_Thailand:visible').hide("fast");
        jQuery('#div_AP_SP_Malaysia:visible').hide("fast");	
        jQuery('#div_AP_SP_Indonesia:visible').hide("fast");
        jQuery('#div_AP_SP_Vietnam:visible').hide("fast");	
    }
}




function getRegion(country) {
    var region = "Europe";

    if(country == "Australia" || country == "Brunei" || country == "Bangladesh" || country == "Mongolia" || country == "China" || country == "Hong Kong" || country == "India" || country == "Indonesia" || country == "Japan" || country == "Korea" || country == "Malaysia" || country == "Myanmar" || country == "New Zealand" || country == "Philippines" || country == "Singapore" || country == "South Korea" || country == "Sri Lanka" || country == "Taiwan" || country == "Thailand" || country == "Vietnam" || country == "Cambodia" || country == "Laos" || country == "East Timor" || country == "Bhutan" || country == "Maldives" || country == "Nepal" || country == "Papua New Guinea" || country == "Tasmanien" || country == "Antarctica" || country == "Christmas Island" || country == "Cocos (Keeling) Islands" || country == "Fiji" || country == "French Polynesia" || country == "Heard Island and McDonald Islands" || country == "Kiribati" || country == "Mongolia" || country == "Nauru" || country == "New Caledonia" || country == "Niue" || country == "Norfolk Island" || country == "Pitcairn" || country == "Samoa" || country == "Solomon Islands" || country == "Tokelau" || country == "Tonga" || country == "Tuvalu" ||country == "Vanuatu" || country == "Wallis and Futuna") 
    { 
        region = "Asia";
    }

    if(country == "USA" || country == "United States" || country == "Canada" || country == "Mexico" || country == "Brazil" || country == "Costa Rica" || country == "Guatemala" || country == "Honduras" || country == "Chile" || country == "Argentina" || country == "Panama" || country == "Peru" || country == "Bolivia" || country == "Ecuador" || country == "Colombia" || country == "Venezuela" || country == "Anguilla" || country == "Antigua and Barbuda" || country == "Aruba" || country == "Bahamas" || country == "Barbados" || country == "Belize" || country == "Bermuda" || country == "Bonaire, Sint Eustatius and Saba" || country == "Cayman Islands" || country == "Cook Islands" || country == "Curacao" || country == "Dominican Republic" || country == "El Salvador" || country == "Haiti" || country == "Jamaica" || country == "Martinique" || country == "Nicaragua" || country == "Paraguay" || country == "Saint Kitts and Nevis" || country == "Saint Lucia" || country == "Saint Martin (French part)" || country == "Saint Vincent" || country == "Suriname" || country == "Trinidad and Tobago" || country == "Turks and Caicos Islands" || country == "Uruguay" || country == "British Virgin Islands" || country == "Dominica" || country == "Falkland Islands" || country == "French Guiana" || country == "Greenland" || country == "Grenada" || country == "Guadeloupe" || country == "Guyana" || country == "Saint Barthelemy" || country == "Saint Kitts and Nevis" || country == "Saint Lucia" || country == "Saint Pierre and Miquelon" || country == "South Georgia and the South Sandwich Islands")
    { 
        region = "Americas";
    }

    return region;
}





function getRanking(RequestedService, ranked) {
    var defaultR = ranked;
    var ranking = defaultR;

    if (RequestedService == "Demo Request") {
        ranking = unescape("2 Demo Request");
    }
    if (RequestedService == "Quote Request") {
        ranking = unescape("1 Quote Request or Callback");
    }
    if (RequestedService == "Callback") {
        ranking = unescape("1 Quote Request or Callback");
    }
    if (RequestedService == "Callback - Sales") {
        ranking = unescape("1 Quote Request or Callback");
    }
    if (RequestedService == "Callback - Customer Service") {
        ranking = unescape("4 General Request");
    }
    if (RequestedService == "Customer Service") {
        ranking = unescape("4 General Request");
    }
    if (RequestedService == "Product Info") {
        ranking = unescape("4 General Request");
    }
    if (RequestedService == "General Contact") {
        ranking = unescape("4 General Request");
    }

    return ranking;
}




function getMailHeader(RequestedService, defaultMailHeader) {
    var Header = defaultMailHeader;
    var zipForm = jQuery('[name=C_Zip_Postal]').val();
    var interestForm = jQuery('[name=Product_Interest]').val();

    Header = unescape(defaultMailHeader + " // " + RequestedService + " // " + interestForm);

    return Header;
}





function getRequestedService() {
    var RequestedService = "";
    if (document.ContactForm["Subject"]) var SubjectObject = document.ContactForm["Subject"];
    if (document.ContactForm["RequestedService"]) var SubjectObject = document.ContactForm["RequestedService"];
    if (SubjectObject) {
        if (SubjectObject.type == "hidden") {
            RequestedService = SubjectObject.value;
        } else {
            var anz2 = SubjectObject.length;
            for (var j = 0; j < anz2; j++) {
                var f2 = SubjectObject[j];
                if (f2.checked || f2.selected) RequestedService = SubjectObject[j].value;
            }
        }
    }
    return RequestedService;
}