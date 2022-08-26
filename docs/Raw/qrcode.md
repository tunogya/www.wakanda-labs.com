# QR Code

## Request

```shell
curl https://raw.wakanda-labs.com/qrcode
```

## Response

![qrcode](https://raw.wakanda-labs.com/qrcode)

## Query Params

| Param                | Type   | Description                                                                                                                                            |
|----------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| text                 | string | Text to encode or a list of objects describing segments.                                                                                               |
| version              | number | The text to encode                                                                                                                                     |
| errorCorrectionLevel | string | Error correction level. Possible values are low, medium, quartile, high or L, M, Q, H.                                                                 |
| maskPattern          | number | Possible values are 0, 1, 2, 3, 4, 5, 6, 7. If not specified the more suitable value will be calculated.                                               |
| margin               | number | Default: 4. Define how much wide the quiet zone should be.                                                                                             |
| scale                | number | Default: 4. Scale factor. A value of 1 means 1px per modules (black dots).                                                                             |
| small                | bool   | false                                                                                                                                                  | 
| width                | number | Forces a specific width for the output image. If width is too small to contain the qr symbol, this option will be ignored. Takes precedence over scale |
