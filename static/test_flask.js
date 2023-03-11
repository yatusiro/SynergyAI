// function test_flask() {
//     $.ajax({
//             url: 'test_post/nn',
//             type: 'POST',
//             data: {'name': 'letian', 'password': '123'},
//             dataType: 'json',
//             success: function(response) {
//                 // $('#main').text(response)
//                 console.log(response)
//             }
//         })
// }

function test_flask() {
    
    let url = showsting()

    $.ajax({
            url: 'test_post/nn',
            type: 'POST',
            data: {"url": url},
            dataType: 'json',
            success: function(response) {
                // $('#main').text(response)
                console.log(response)
                data = JSON.parse(response)
                console.log(data)
                console.log("eddie from js 16:36")
            }
    })
    // let url = "./v2_chocolateData.csv"

    // $.ajax({
    //         url: 'test_post/nn',
    //         type: 'POST',
    //         data: {"url": url},
    //         dataType: 'json',
    //         success: function(response) {
    //             // $('#main').text(response)
    //             console.log(response)
    //             console.log("eddie from js 16:36")
    //         }
    // })


    // let param1 = {
    //         "srxApi":"setNewGroupStep1",
    //         "apiVer" : 0,
    //         "packSn" : 0,
    //         "operate" : "command",
    //         "option" : ["none"],
    //         "param" : {
    //             "frameRate" : 60,
    //             "colorDepth" : 2,
    //             "isUsedDvi" : 1
    //         },
    //         "endFlg":"srxApi"
    // }
    //
    // $.ajax({
    //     url: 'test_post/nn',
    //     data: JSON.stringify(param1),
    //     type: 'POST',
    //     // data: {"url": url},
    //     dataType: 'json',
    //     success: function(response) {
    //         // $('#main').text(response)
    //         console.log(response)
    //         console.log("eddie from js 16:36")
    //     }
    // })

}

function testflask() {
    
    let url = showsting()

    $.ajax({
            url: 'testpost/nn',
            type: 'POST',
            data: {"url": url},
            dataType: 'json',
            success: function(response) {
                // $('#main').text(response)
                console.log(response);
                acc = response + '';
                document.getElementById('haccuracy').value=acc.slice(0,6)
            }
    })
}

function testflask2() {
    
    let url = predicttest()

    $.ajax({
            url: 'testpost2/nn',
            type: 'POST',
            data: {"url": url},
            dataType: 'json',
            success: function(response) {
                // $('#main').text(response)
                console.log(response);
                acc = response + '';
                document.getElementById('haccuracy').value=acc.slice(0,6)
            }
    })
}

function testflask3() {
    
    let url = predictobj()

    $.ajax({
            url: 'testpost3/nn',
            type: 'POST',
            data: {"url": url},
            dataType: 'json',
            success: function(response) {
                // $('#main').text(response)
                console.log(response);
                acc = response[1] + '';
                document.getElementById('haccuracy').value=acc.slice(0,6)
                document.getElementById('aaccuracy').value=acc.slice(0,6)
            }
    })
}

function test4(){
    a=0;
    while(true){
    try{
        cy.elements()[a]._private.data.id;
        // console.log(cy.elements()[a]._private.data.id);
        if(cy.elements()[a]._private.data.id.indexOf('AI')==0){
            console.log(cy.elements()[a]._private.data.id);
            let url=predictnode(cy.elements()[a]);
            console.log(cy.elements()[a]._private.data.id);
            $.ajax({
                url: 'testpost3/nn',
                type: 'POST',
                data: {"url": url},
                dataType: 'json',
                success: function(response) {
                    // $('#main').text(response)
                    console.log(response);
                    acc = response[1] + '';
                    tgt = response[0];
                    document.getElementById('haccuracy').value=acc.slice(0,6)
                    document.getElementById('aaccuracy').value=acc.slice(0,6)
                    confirm('Target:'+tgt+' Used:'+response[2]+' Accuracy:'+acc.slice(0,6))
                    // console.log('Accuracy:'+acc.slice(0,6))
                }
        })
        }
        a++;
    }
    catch{break}
    }
}

