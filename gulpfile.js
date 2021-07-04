const { src, dest, watch, parallel, series } = require("gulp");

const sass = require("gulp-sass");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const del = require("del");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");
const fonter = require("gulp-fonter");

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
}

function cleanDist() {
  return del("dist");
}

function otf2ttf() {
  return src("app/fonts/**/*.otf")
    .pipe(
      fonter({
        formats: ["ttf"],
      })
    )
    .pipe(dest("app/fonts"));
}

// function delOtf() {
//   return del("dist/fonts/*.otf");
// }

function fonts() {
  src("app/fonts/**/*.ttf").pipe(ttf2woff()).pipe(dest("dist/fonts"));
  return src("app/fonts/**/*.ttf").pipe(ttf2woff2()).pipe(dest("dist/fonts"));
}

function images() {
  return src("app/img/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/img"));
}

function scripts() {
  return src([
    "node_modules/jquery/dist/jquery.js",
    "node_modules/slick-carousel/slick/slick.js",
    "app/js/main.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function styles() {
  return src("app/sass/style.sass")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function build() {
  return src(
    [
      "app/css/style.min.css",
      "app/fonts/**/*",
      "app/js/main.min.js",
      "app/*.html",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

function watching() {
  watch(["app/sass/**/*.sass"], styles);
  watch(["app/fonts/**/*"], fonts);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  watch(["app/*.html"]).on("change", browserSync.reload);
}

exports.fonts = fonts;
exports.otf2ttf = otf2ttf;
// exports.delOtf = delOtf;
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(
  styles,
  fonts,
  // delOtf,
  scripts,
  browsersync,
  watching
);
