/// <reference types="../@types/jquery"/>


/* ======== aside ======== */
$('.manuBtn').on('click' , function(){
    // $('aside').animate({width : '200'},1000)
    $('aside').show(100)
    $('.manuBtn').animate({left: '200'},100)
    $('aside').animate({  opacity: '1'},100)

})
$('.closeBtn').on('click',function(){
    $('aside').hide(100)
    $('.manuBtn').animate({left: '0'},100)
    $('aside').animate({  opacity: '0'},100)

})
$ ('a[href^="#"]').on('click',function(e){
    let secId =$(e.target).attr('href')
    let secOffs =$(secId).offset().top
    $('a[href^="#"]').removeClass('active').siblings().removeClass('active');
    // $ ('a[href^="#"]').removeClass('active')
    // $(e.target).removeClass('active').siblings().removeClass('active');

    $(e.target).addClass('active')
    $('html, body').animate({ scrollTop: secOffs }, 500);
})

/* ======== duration ======== */
$('.duration  .singer').on('click',function(){
    $('.info').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);

    });
    
    // $('.duration  .singer').on('click',function(e){
    //     $('.info').not($(e.target).next()).slideUp(500);
    //     $(e.target).next().eq(1).slideToggle(500);
    
    //     });
        

 
    // <!--  ======== detailsSection ========  -->

 const countDownDate = new Date("Dec 31, 2024 23:59:59").getTime()
console.log(countDownDate);
let counter = setInterval(function(){
let datOfNow = new Date().getTime()
let dateDeffr = countDownDate - datOfNow
let day = Math.floor(dateDeffr /(1000*60*60*24))
let houers = Math.floor((dateDeffr % (1000*60*60*24) /(1000 *60 *60)))
let menits = Math.floor((dateDeffr % (1000*60*60)/(1000*60) ))
let sec = Math.floor((dateDeffr % (1000*60)/(1000) ))
$('.day span').html(`${day} D`)
$('.houers span').html(`${houers} H`)
$('.menits span').html(`${menits} m`)
$('.sec span').html(`${sec} s`)
console.log(menits);
},1000)

// <!--  ======== CONTACTSection ========  -->
// let maxChar = 100
// $('#chars').html(`${maxChar} Characyer Reamining`)
// $('textarea').on('input',function(e){
//     let valedChar = maxChar - $(this).val().length;
//     console.log(valedChar);
// })
$(document).ready(function() {
    let maxChar = 100; // تأكد من تعيين القيمة الصحيحة لـ maxChar

    $('textarea').on('input', function(e) {
        let valedChar = maxChar - $(this).val().length;
        console.log(valedChar);
        $('#chars').css('color', 'red')
        if(valedChar >0){
            $('#chars').html(`${valedChar} Characyer Reamining`)
            

        }
        else{
            $('#chars').html(`your available character finished `)

        }
    });
});


$(function(){
    $('.loading').fadeOut(1000,function(){
        $('.loadingHome').fadeOut(1000,function(){
            $('body').css(  {overflow: 'auto'})
        })
    })
})
