let value = 0;
    function slid()
    {
        ++value;
        if(value > 2)
        {value=0;}
        let container = document.getElementById("con");
        container.style.marginLeft = `${-500*value}px`;
    }
    function count_yes_and_no() {
        let counter_for_yes = 0;
        let counter_for_no = 0;
        let all_radios = document.querySelectorAll("input[type='radio']");

        for (let i = 0; i < all_radios.length; i++) {
            if (all_radios[i].checked && all_radios[i].value === "yes") {
                counter_for_yes++;
            } else if (all_radios[i].checked && all_radios[i].value === "no") {
                counter_for_no++;
            }
        }
        alert(`thank you for your feedback total: yes total = ${counter_for_yes} no = ${counter_for_no}`)
    }