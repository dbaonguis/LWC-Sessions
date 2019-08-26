import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class SimpleLightBoxExample extends LightningElement {
    scriptLoaded = false;

    renderedCallback() {
        if (!this.scriptLoaded) {
            Promise.all([
                loadStyle(this, SL + '/dist/simpleLightbox.css'),
                loadScript(this, SL + '/dist/simpleLightbox.js')
            ]).then(() => {
                this.scriptLoaded = true;
            }).catch((error) => {
                console.error('Could not initialize simple light box', error);
            });
        }
    }

    openGallery() {
        SimpleLightbox.open({
            items: [
                'https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Magazine/04April/CR-Cars-InlineHero-ComingSoon-Toyota-Supra-2-19',
                'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-07%252F5cf0c5d0-b1de-11e9-96b7-cedf7a3d0dcd%26client%3Da1acac3e1b3290917d92%26signature%3De99e2cce5e94763a3dc0508b531dea5230c0b044&client=amp-blogside-v2&signature=ee93bf27f9aa5ad45ae060f1f31fc454af0ae511',
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1094874726.png?crop=0.542xw:0.814xh;0.0472xw,0.127xh&resize=640:*'
            ]
        });
    }
}