var invennt_tc = invennt_tc || {};

invennt_tc.main = (function() {
  'strict';

  var init = function() {
    console.log('invennt_tc.main loaded');

    // load eventFilter if it's on the right page
    if(document.getElementById('i_tc_container')) {
      calculator.init();
    }

  };

  var calculator = {
    init: function() {
      console.log("Let's do some sums!");
    },

    turnover : 0,
    sme_status: "",
    qep: 0,
    low : 0,
    high : 0,

    turnover_calc: function(){
      var turnoverVal = document.getElementById('i_tc_turnover');
      this.turnover = turnoverVal.value;
      this.makeSum();
    },

    nosme: function(s) {
      
      this.low = 6;
      this.high = 8;

      this.makeSum();
    },

    sme: function(s) { 
      var sme_dropdown = document.getElementsByClassName('i_tc_sme_dropdown_wrapper')[0];

      if (s === 1) { // YES 
        this.qep = 26;
        this.sme_status = "YES";
        sme_dropdown.style.display = "block";
        // hide large company dropdown
      } else if (s === 2) { // NO
        this.qep = 8;
        this.sme_status = "NO";
        this.nosme();

        sme_dropdown.style.display = "none";
        // show large company dropdown
      } else {
        sme_dropdown.style.display = "none";
        // hide large company dropdown
      }
    },

    sme_formula: function(s) {

      switch(s) {

        // ARCHITECT
        case 1: 
          this.low = 4;
          this.high = 6;
          this.makeSum();
          break;

        // MAIN CONTRACTOR
        case 2:
          this.low = 1;
          this.high = 3;
          this.makeSum();
          break;

        // ENGINEERING FIRM
        case 3:
          this.low = 3;
          this.high = 5;
          this.makeSum();
          break;

        // CONSULTANT
        case 4:
          this.low = 3;
          this.high = 5;
          this.makeSum();
          break;

        // PRODUCT MANUFACTURER
        case 5:
          this.low = 10;
          this.high = 15;
          this.makeSum();
          break;

        // SPECIALIST SUBCONTRACTOR
        case 6:
          this.low = 3;
          this.high = 7;
          this.makeSum();
          break;

        // IT
        case 7:
          this.low = 20;
          this.high = 40;
          this.makeSum();
          break;

        // OTHER
        case 8:
          this.callUs();
          break;

        default:
          this.low = 0;
          this.high = 0;
          this.makeSum();
      }
    },

    callUs: function(){
      var tc_callbox_wrapper = document.getElementsByClassName('i_tc_call_wrapper')[0],
          tc_callbox = document.getElementsByClassName('i_tc_call')[0],
          resultsBox = document.getElementsByClassName('i_tc_results_wrapper')[0];

      resultsBox.style.display="none";
      tc_callbox_wrapper.style.display="block";
      tc_callbox.style.display="block";
    },

    makeSum: function(){
      var resultsBox = document.getElementsByClassName('i_tc_results_wrapper')[0],
          results = document.getElementsByClassName('i_tc_results')[0],
          tc_callbox = document.getElementsByClassName('i_tc_call_wrapper')[0],
          lower_range = this.turnover * this.low / 100,
          higher_range = this.turnover * this.high / 100,
          l_qualifying_percentage = lower_range * this.qep / 100;
          h_qualifying_percentage = higher_range * this.qep / 100;

      resultsBox.style.display="block";
      tc_callbox.style.display="none";

      
      if (this.sme_status === "YES" || this.sme_status === "NO") {
        console.log("L: " + lower_range + " H: " + higher_range + " QEP: " + this.qep + "%");
        results.innerHTML = "Lower claim: £" + l_qualifying_percentage.toFixed(2) + " Upper claim: £" + h_qualifying_percentage.toFixed(2);
      }


      // if (this.sme_status === "YES") {

      //   console.log("SME – L: " + lower_range + "% H: " + higher_range + "% QEP: " + this.qep);

      //   results.innerHTML = lower_range + " Upper: " + higher_range + " " + "SME";

      // } else if (this.sme_status === "NO") {
      //   console.log("NON-SME – L: " + lower_range + "% " + "H: " + higher_range + "%");

      //   results.innerHTML = this.low + " "  + this.high + " " + this.turnover + " " + "Not SME";
      // }
    
    }

  };

  return {
    init       : init,
    calculator : calculator
  };

})();

invennt_tc.main.init();
