import gulp from "gulp";
import gpug from "gulp-pug";
import del from  "del";

const routes = {
    pug: {
        src: "src/*.pug",
        dest: "build"
    }
};


const pug = () => gulp
.src(routes.pug.src)
.pipe(gpug())
.pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build"]); // 빌드실수를 했을때 삭제하고 다시 만들어주는 모듈

const prepare = gulp.series([clean]);

const assets = gulp.series([pug])

export const dev =  gulp.series([prepare,assets]); 