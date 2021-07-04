import gulp from "gulp";
import gpug from "gulp-pug";
import del from  "del";
import ws from "gulp-webserver";

const routes = {
    pug: {
        watch: "src/**/*.pug",
        src: "src/*.pug",
        dest: "build"
    }
};


const pug = () => gulp
.src(routes.pug.src)
.pipe(gpug())
.pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build"]); // 빌드실수를 했을때 삭제하고 다시 만들어주는 모듈

const webserver = () => gulp.src("build").pipe(ws({livereload: true, open: true}));

const watch = () => { //-w , 왓치모드 컴파일 바로바로해주는기능
    gulp.watch(routes.pug.watch, pug);
}


const prepare = gulp.series([clean]);

const assets = gulp.series([pug]);

const postDev = gulp.series([webserver,watch]); //동시에 두가지 Task를 처리하는 방법 그냥 저렇게 일렬로 쓰고 , 로 구분해주기

export const dev =  gulp.series([prepare,assets,postDev]); 