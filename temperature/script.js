    function convert() {
      var temp = document.getElementById("input").value;
      var unit_type = document.getElementById("unit").value;
      var result;
      var unit_Name;
      var final_result ;

      if (unit_type === "celsius") {
         result= (temp- 32) * 5/9;
         unit_Name = "°C";
      } else {
         result = (temp * 9/5) + 32;
        unit_Name = "°F";
        
      }

       final_result = document.getElementById("result");
      final_result.textContent = "Is equivalent to: " + result.toFixed(2) + " " + unit_Name;
    }