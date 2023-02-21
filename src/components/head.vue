<template>
  <div class="head">
    <a class="download-pdf" @click="download">下载 PDF</a>
    <a class="last-modified">最后更新于2023年2月</a>
  </div>
</template>

<script>
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'


export default {
  name: 'Head',
  data() {
    return {
      withList: {
        a3: {width: 297, height: 420}, 
        a4: {width: 210, height: 297}
      }
    }
  },
  mounted() {

  },
  computed:{},
  methods:{
    download(){
      this.getPdf("卢志瑶 - 前端开发工程师",document.querySelector('.content'))
    },
    getPdf(title,div){
      const targetDom = div
       // 使用html2canvas 转换html为canvas
       html2Canvas(targetDom, {
        dpi: window.devicePixelRatio * 3, // 将分辨率提高到特定的DPI 提高四倍
        scale: 3, // 按比例增加分辨率
        windowWidth: 1920,
        windowHeight: targetDom.offsetHeight,
      }).then((canvas) => {
        var paper = "a4";
        var padding = 0;
        var paperSize = this.withList[paper];
        const pdf = new JsPDF('p', 'mm', paper) // A4纸，纵向
       
        const ctx = canvas.getContext('2d')
        const width = paperSize.width - padding * 2
        const height = paperSize.height - padding * 2; // A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
        const imgHeight = Math.floor((height * canvas.width) / width) // 按A4显示比例换算一页图像的像素高度
        let renderedHeight = 0;

        while (renderedHeight < canvas.height) {
          const page = document.createElement('canvas')
          page.width = canvas.width
          page.height = Math.min(imgHeight, canvas.height - renderedHeight)

          // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
          page
            .getContext('2d')
            .putImageData(
              ctx.getImageData(
                0,
                renderedHeight,
                canvas.width,
                Math.min(imgHeight, canvas.height - renderedHeight)
              ),
              0,
              0
            )
          pdf.addImage(
            page.toDataURL('image/jpeg', 1.0),
            'JPEG',
            padding,
            padding,
            width,
            Math.min(height, (width * page.height) / page.width)
          ) // 添加图像到页面，保留 padding边距

          renderedHeight += imgHeight
          console.log(canvas.height, renderedHeight);
          if (renderedHeight < canvas.height) {
            pdf.addPage() // 如果后面还有内容，添加一个空页
          }
        }

        // 保存文件
        pdf.save(`${title}.pdf`)
        copyDom.parentNode.removeChild(targetDom)
      })
    },
  }
}
</script>

<style scoped>
.head {
  width: 1200px;
  position: relative;
  top: 40px;
  margin: 0 auto;
}
.download-pdf {
  position: relative;
  cursor: pointer;
  font-size: 12px;
  color: #bbb;
}
.last-modified {
  float: right;
  font-size: 12px;
  color: #bbb;
}
</style>>
