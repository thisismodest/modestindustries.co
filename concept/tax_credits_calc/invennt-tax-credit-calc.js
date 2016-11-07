var invennt_tc = invennt_tc || {};

invennt_tc.main = (function() {
  'strict';

  var init = function() {
    // load eventFilter if it's on the right page
    if(document.getElementById('i_tc_container')) {
      calculator.init();
    }

  };

  var activeTurnover = false;

  var sme_info_display = false;

  var calculator = {
    init: function() {
      // INIT'ED
    },

    turnover : 0,
    sme_status: "",
    qep: 0,
    low : 0,
    high : 0,

    turnover_calc: function(){
      var turnoverVal = document.getElementById('i_tc_turnover');
      
      this.activeTurnover = true;
      this.turnover = turnoverVal.value;
      this.makeSum();
    },

    toggle_sme_info: function(){
      var sme_info = document.getElementsByClassName('i_tc_info_box')[0];

      if (!this.sme_info_display) {
        sme_info.style.display = "block";
        this.sme_info_display = true;
      } else if (this.sme_info_display) {
        sme_info.style.display = "none";
        this.sme_info_display = false;
      }
      
    },

    nosme: function() {
      
      this.low = 6;
      this.high = 8;

    },

    sme: function(s) { 
      var sme_dropdown = document.getElementsByClassName('i_tc_sme_dropdown_wrapper')[0],
          resultsBox = document.getElementsByClassName('i_tc_results_wrapper')[0];

      if (s === 1) { // YES 
        this.qep = 26;
        this.sme_status = "YES";
        sme_dropdown.style.display = "block";
        // this.toggle_turnover(false);
        // hide large company dropdown
      } else if (s === 2) { // NO
        this.qep = 8;
        this.sme_status = "NO";
        this.nosme();

        sme_dropdown.style.display = "none";
        this.toggle_turnover(true);
        // show large company dropdown
        
      } else {
        sme_dropdown.style.display = "none";
        resultsBox.style.display = "none";
        this.activeTurnover = false;
        this.toggle_turnover(false);
        this.toggle_contact(false);
      }
    },

    toggle_turnover: function(b) {
      var turnover_wrapper = document.getElementsByClassName('i_tc_turnover_wrapper')[0];   
      if (b) {
        turnover_wrapper.style.display = "block";
      } else if (!b) {
        turnover_wrapper.style.display = "none";
      }
    },

    toggle_contact: function(b) {
      var tc_callbox_wrapper = document.getElementsByClassName('i_tc_call_wrapper')[0];

      if (b) {
        tc_callbox_wrapper.style.display="block";
      } else if (!b) {
        tc_callbox_wrapper.style.display="none";
      }

    },

    sme_formula: function(s) {
      
      this.toggle_turnover(true);

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
          this.toggle_turnover(false);
          this.callUs();
          break;

        default:
          var resultsBox = document.getElementsByClassName('i_tc_results_wrapper')[0];

          this.low = 0;
          this.high = 0;
          resultsBox.style.display="none";
          this.toggle_turnover(false);
          this.toggle_contact(false);
      }
    },

    callUs: function(){
      var resultsBox = document.getElementsByClassName('i_tc_results_wrapper')[0];

      resultsBox.style.display="none";
      this.toggle_contact(true);
    },

    makeSum: function(){
      var resultsBox = document.getElementsByClassName('i_tc_results_wrapper')[0],
          results = document.getElementsByClassName('i_tc_results')[0],
          lower_range = this.turnover * this.low / 100,
          higher_range = this.turnover * this.high / 100,
          l_qualifying_percentage = lower_range * this.qep / 100;
          h_qualifying_percentage = higher_range * this.qep / 100;
      
      if (this.activeTurnover === true) {
        this.toggle_contact(true);
        resultsBox.style.display="block";
        if (this.sme_status === "YES" || this.sme_status === "NO") {
          console.log("L: " + lower_range + " H: " + higher_range + " QEP: " + this.qep + "%");
          results.innerHTML = "You can claim between <strong>£" + l_qualifying_percentage.toFixed(2) + "</strong> and <strong>£" + h_qualifying_percentage.toFixed(2) + "</strong>";
        }
      }
    }

  };

  return {
    init       : init,
    calculator : calculator
  };

})();

invennt_tc.main.init();
