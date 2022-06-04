

            function plus() {

                let value1 = document.getElementById('value1').value
                let value2 = document.getElementById('value2').value


                let resultPlus = parseInt(value1) + parseInt(value2)
                    result(resultPlus)
            }



            function minus() {
                let value1 = document.getElementById('value1').value
                let value2 = document.getElementById('value2').value
                let resultMinus = value1 - value2
                    result(resultMinus)
            }



            function divide() {

                let value1 = document.getElementById('value1').value
                let value2 = document.getElementById('value2').value

                let resultDivide = value1 / value2

                    result(resultDivide)

                if (resultDivide === Infinity) result('value = 0')
            }



            function multiply() {

                let value1 = document.getElementById('value1').value
                let value2 = document.getElementById('value2').value

                let resultMultiply = value1 * value2
                    result(resultMultiply)

            }



            function result(res) {
                document.getElementById('result')
                    .innerHTML = 'result : ' + (res)
            }

