### SAM2 Image Segmentation on Video Stream

The SAM2 image segmentation model was applied to a video stream to generate segments for each frame. The following steps were taken to ensure accurate segmentation:

1. **Segment Generation:**
   - The image segmentation function was used to generate segments for each frame of the video.
   
2. **Segment Sorting:**
   - After generating segments, each segment was sorted in negative space to highlight the largest one, ensuring that the subject of interest remained prominent.

3. **Final Output:**
   - The largest segment was then adjusted so that the subject appeared in white, and the background was rendered in black.

As a result, the segmentation process successfully isolated the subject from the background, providing a clear distinction between them.


<div align="center">
  <iframe width="600" height="400" src="https://www.youtube.com/embed/mt4r5sXGH3I" frameborder="0" allowfullscreen></iframe>
</div>

## Using the same to prompt more than one subjects:

<div align="center">
  <iframe width="600" height="400" src="https://www.youtube.com/embed/_oFpPI6ZFNY" frameborder="0" allowfullscreen></iframe>
</div>

## Using the same to prompt multiple subjects:

<div align="center">
  <iframe width="600" height="400" src="https://www.youtube.com/embed/_oFpPI6ZFNY" frameborder="0" allowfullscreen></iframe>
</div>




## Point to note:


### Issues with Applying SAM Image Masking on Video Frames

Separating the video into frames and applying the SAM image masking on each frame individually encountered the following challenges:

1. **Loss of Prompting Ability:**
   - The process fails to track all masks (objects) across frames effectively. This leads to difficulties in maintaining consistent tracking throughout the video.

2. **High Computational Power Requirements:**
   - The computational demand for processing each frame is significant. During testing, it was observed that the system could process only 4 frames in approximately 35 minutes before the computer crashed due to resource exhaustion.


