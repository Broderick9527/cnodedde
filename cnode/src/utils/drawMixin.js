// 屏幕适配 mixin 函数

// * 默认缩放值
const scale = {
  width: '1',
  height: '1'
}

// * 设计稿尺寸（px）
const baseWidth = 1920
const baseHeight = 1080

// * 需保持的比例（默认1.77778）
const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))

export default {
  data () {
    return {
      // * 定时函数
      drawTiming: null
    }
  },
  mounted () {
    // const containerRef = this.$refs.containerRef
    this.calcRate()
    // this.domResize()
    // containerRef.addEventListener("resize", this.resize);
    // containerRef.addEventListener('DOMSubtreeModified', this.calcRate);
  },
  unMounted () {
  },
  directives: {
    // 监听元素宽高的变化
    resize: { // 指令的名称
      bind (el, binding) { // el为绑定的元素，binding为绑定给指令的对象
        let width = ''; let height = ''
        function isReize () {
          const style = document.defaultView.getComputedStyle(el)
          if (width !== style.width || height !== style.height) {
            binding.value() // 关键
          }
          width = style.width
          height = style.height
        }
        el.__vueSetInterval__ = setInterval(isReize, 300)
      },
      unbind (el) {
        clearInterval(el.__vueSetInterval__)
      }
    }
  },
  methods: {
    // domResize() {
    //   const self = this
    //   const callback = (mutations) => {
    //     mutations.forEach((mutation) => {
    //       self.calcRate();
    //       console.log(1);
    //     });
    //   };
    //   const containerRef = this.$refs["containerRef"];
    //   var config = { attributes: true, childList: false, subtree: false };
    //   const observer = new MutationObserver(callback);
    //   observer.observe(containerRef, config);
    // },
    domResize () { // 当宽高变化时就会执行
      // 适配页面
      this.resize()
    },
    // calcRate () {
    //   const appRef = this.$refs["appRef"]
    //   console.log(appRef)
    //   if (!appRef) return
    //   // 当前宽高比
    //   const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5))
    //   if (appRef) {
    //     if (currentRate > baseProportion) {
    //       // 表示更宽
    //       scale.width = ((window.innerHeight * baseProportion) / baseWidth).toFixed(5)
    //       scale.height = (window.innerHeight / baseHeight).toFixed(5)
    //       appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
    //     } else {
    //       // 表示更高
    //       scale.height = ((window.innerWidth / baseProportion) / baseHeight).toFixed(5)
    //       scale.width = (window.innerWidth / baseWidth).toFixed(5)
    //       appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
    //     }
    //   }
    // },
    calcRate () {
      const appRef = this.$refs.appRef
      const containerRef = this.$refs.containerRef
      // console.log(containerRef.offsetWidth);
      // console.log("appRef", appRef);
      if (!appRef) return
      // 当前宽高比
      // const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5))
      const currentRate = parseFloat(
        (containerRef.offsetWidth / containerRef.offsetHeight).toFixed(5)
      )

      // console.log('currentRate',currentRate );

      // width: 2977px;
      // height: 1080px;
      const NewWidth = 1920
      const NewHeight = 1080
      // const NewbaseProportion = parseFloat((NewWidth / NewHeight).toFixed(5))

      // const scaleX = parseFloat((window.innerWidth/NewWidth).toFixed(5));
      // const scaleY = parseFloat((window.innerHeight/NewHeight).toFixed(5));
      const scaleX = parseFloat(
        (containerRef.offsetWidth / NewWidth).toFixed(5)
      )
      const scaleY = parseFloat(
        (containerRef.offsetHeight / NewHeight).toFixed(5)
      )
      // console.log();
      if (appRef) {
        // scale.width = ((window.innerHeight * NewbaseProportion) / NewWidth).toFixed(5)
        // scale.height = (window.innerHeight / baseHeight).toFixed(5)
        // appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
        // console.log('scale',scaleX,scaleY);
        // console.log('window.innerWidth',window);
        // console.log('width',window.innerWidth,window.outerWidth);
        // console.log('height',window.innerHeight,window.outerHeight);
        if (currentRate > baseProportion) {
          // 表示更宽

          scale.width = (
            (containerRef.offsetHeight * baseProportion) /
            baseWidth
          ).toFixed(5)
          scale.height = (containerRef.offsetHeight / baseHeight).toFixed(5)
          // console.log('scale',scaleX,scaleY);
          // console.log('表示更宽',scale.width,scale.height);

          // appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
          appRef.style.transform = `scale(${scaleX}, ${scaleY}) translate(-50%, -50%)`
          appRef.style.overflow = 'hidden'
          document.getElementsByTagName('body')[0].className = 'hidOverflow'
        } else {
          // 表示更高
          scale.height = (
            containerRef.offsetWidth /
            baseProportion /
            baseHeight
          ).toFixed(5)
          scale.width = (containerRef.offsetWidth / baseWidth).toFixed(5)
          appRef.style.transform = `scale(${scaleX}, ${scaleY}) translate(-50%, -50%)`
          appRef.style.overflow = 'hidden'
        }
      }
    },
    resize () {
      clearTimeout(this.drawTiming)
      this.drawTiming = setTimeout(() => {
        this.calcRate()
      }, 200)
    }
  }
}
