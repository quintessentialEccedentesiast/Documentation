So the SAM2 model or Fastsam will automatically segemnt everything in the video.
We get the option to prompt a particular object and then it will continue tracking that object effectively for the rest of the video. 

If the object is unique, i.e. if there is only one particular instance of the object in the video then the model is very efficient even if it leaves and renters the frame more then once.

But if the object is not unique, i.e there are multiple instances of the same class in the video or frame. Then it'll segment them ambiguously.
For example say Class Sheep, Has two objects Sheep1 with Mask1 and Sheep2 with Mask2.
If the move out of the fram SAM will have a high possibility of segmenting Sheep1 with Mask2 and Sheep2 with Mask1.
Thus proper tracking will not work.


### Why Live Tracking Won't Work Effectively with SAM2

SAM2 is a powerful model for segmentation that masks all identifiable objects in a frame. However, when applied to live tracking scenarios, several challenges arise that hinder its effectiveness. Below are the key reasons why live tracking may not work well with SAM2.

### Limitations of SAM2 for Live Tracking

1. **Lack of Real-Time Prompting Capability:**
   - **Description**: For a live model, we lose the ability to provide prompts either through textual input or by clicking on objects. This limitation means that SAM2 will automatically track all identifiable objects within the frame without any specific guidance.
   - **Impact**: Without real-time input, the model might not focus on the objects of interest and will instead process every detectable object, which can be computationally expensive and less efficient for specific tracking needs.

2. **Challenges with Occlusion and Overlapping Objects:**
   - **Description**: In dynamic environments, such as sports or crowded scenes, objects (e.g., players or people) often occlude or overlap with each other.
   - **Impact**: This occlusion can cause the tracking algorithm to lose track of individual objects or confuse them with others. SAM2 may struggle to maintain accurate identification and tracking of specific objects, especially when they temporarily disappear behind other objects or overlap significantly.

3. **Limited Computational Resources:**
   - **Description**: Running SAM2, especially larger models, requires substantial computational power. For instance, on a Tesla T4 GPU in Google Colab, the SAM2-Large model achieves a frame rate of only 7-12 FPS.
   - **Impact**: This frame rate is too low for real-time applications, resulting in laggy and unresponsive tracking. Such performance constraints limit the practicality of SAM2 for live tracking in environments where high frame rates are essential.

4. **Difficulty Tracking Multiple Objects of the Same Class:**
   - **Description**: SAM2 may have trouble distinguishing between multiple objects of the same class within a video, particularly when objects move quickly or unpredictably.
   - **Impact**: If an object moves out of frame or changes position rapidly, SAM2 might lose track or confuse it with other similar objects. This limitation can significantly affect applications that require precise tracking of specific instances within a class, such as identifying individual players in a sports game.

5. **Lack of Optimization Parameters for Video Segmentation Function:**

    - **Description:** The image segmentation and video segmentation in SAM2 use two different methods. Using the image segmentation method to loop through all frames of a video requires prompting on all frames individually. In contrast, the video segmentation function allows for prompting in a single frame, and this information is then applied across all frames.
    - **Impact:** This lack of optimization when using the image segmentation method for videos can lead to inefficiencies and increased computational costs. The inability to use a single prompt for continuous tracking across frames reduces the effectiveness of SAM2 for real-time video applications, making it less suitable for live tracking scenarios.

