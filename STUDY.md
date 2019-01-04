## 使用 `ffmpeg` 为视频添加水印

**从左上角贴水印**
```shell
ffmpeg -i 'source.mp4' -i mark.png -filter_complex 'overlay = 8:8' test.mp4
```

**从视频水平、垂直中央贴水印**
```shell
ffmpeg -i 'source.mp4' -i mark.png -filter_complex 'overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2' test.mp4
```

**贴透明水印**
```shell
ffmpeg -y -i test/video.mp4 -i test/mark.png -filter_complex "[1]format=bgra,colorchannelmixer=aa=0.5,rotate=0:c=black@0:ow=rotw(0):oh=roth(0)[image];[0][image]overlay=(W-w)/2:(H-h)/2" test.mp4
```

**获取视屏宽、高**
```shell
```

**缩放水印**
```shell
```
