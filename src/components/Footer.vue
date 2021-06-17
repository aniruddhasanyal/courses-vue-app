<template>
    <div class="main-footer stick-footer">
        <div class="contacts">
            <div class="col-item"><i class="fa fa-phone" aria-hidden="true"></i> 0123-456-789</div>
            <!-- <div class="col-item"><i class="fa fa-whatsapp" aria-hidden="true"></i> 0123-456-789</div> -->
        </div>
        <div class="social-media">
            <span class="col-item"><i class="fa fa-instagram" aria-hidden="true"></i></span>
            <span class="col-item"><i class="fa fa-facebook" aria-hidden="true"></i></span>
            <span class="col-item"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
            <span class="col-item"><i class="fa fa-envelope-o" aria-hidden="true"></i></span> 
        </div>
         <div class="copyright">
            <div class="col-item"><a href="#">www.anigma.com</a> <i class="fa fa-copyright" aria-hidden="true"></i></div>
        </div>
    </div>
</template>

<style scoped>
.contacts {
    text-align: right;
    padding-top: 5px;
}

.social-media {
    text-align: center;
    padding-top: 10px;
}

.copyright {
    text-align: left;
    padding-top: 2px;
}

.col-item {
    padding: 5px;
    overflow: auto;
}
</style>