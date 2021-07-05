import gulp from "gulp";
import gpug from "gulp-pug";
import del from  "del";
import ws from "gulp-webserver";
import image from "gulp-image";
//import sass from "gulp-sass";

//sass.compiler = require("sass");

const routes = {
    pug: {
        watch: "src/**/*.pug",
        src: "src/*.pug",
        dest: "build"
    },
    img: {
        src: "src/img/*",
        dest: "build/img"
    },
    // scss: {
    //     watch: "src/scss/**/*.scss",
    //     src: "src/scss/style.css",
    //     dest: "build/css"
    // }
};


const pug = () => gulp
.src(routes.pug.src)
.pipe(gpug())
.pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build"]); // 빌드실수를 했을때 삭제하고 다시 만들어주는 모듈

const webserver = () => gulp.src("build").pipe(ws({livereload: true, open: true}));

const watch = () => { //-w , 왓치모드 컴파일 바로바로해주는기능
    gulp.watch(routes.pug.watch, pug);
    //gulp.watch(routes.scss.watch, styles);
}

const img = () => gulp
    .src(routes.img.src)
    .pipe(image())
    .pipe(gulp.dest(routes.img.dest));


// const styles = () =>  gulp
//     .src(routes.scss)
//     .pipe(sass().on("error", sass.logError))
//     .pipe(gulp.dest(routes.scss.dest));   

const prepare = gulp.series([clean,img]);

const assets = gulp.series([pug,/*styles*/]);

const postDev = gulp.series([webserver,watch]); //동시에 두가지 Task를 처리하는 방법 그냥 저렇게 일렬로 쓰고 , 로 구분해주기

export const dev =  gulp.series([prepare,assets,postDev]); 