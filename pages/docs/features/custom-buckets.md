# Custom Buckets

# Overview

Custom buckets lets you group existing properties into meaningful segments on the fly. This is focused on enabling every person to answer common segmentation questions easily, quickly and in a low friction way.

Example use-cases include:

- Compare how the core markets are performing between US vs UK vs China vs all others
- Compare how many sign-ups are brought in by organic search vs Google ads vs social media channels together (Facebook, Twitter, LinkedIn)
- Compare # videos watched for users between ages 18-30 vs 30-40 or 40+
- Compare # users based on duration of video watched: < 30, 30-60, 60-90 mins

## Creating Custom Buckets

Add a property in Breakdown, then select the **Customize Buckets** option from the overflow menu

![/14342458665748](/14342458665748.png)

Depending on your added property data type - string vs numeric, you will see a different custom buckets modal, designed based on the data-type use-cases **(more detail below)**

Once you define your segment buckets, click **Apply.** Only then will the custom buckets reflect in the visualization. You will also see the custom buckets as an under-item on the property

![/14342458667924](/14342458667924.png)

To modify the segment buckets, click on the **under-item** and the custom buckets model will open. Once you’ve made the changes, click **Apply**

To remove all grouping and revert to the default, open the custom buckets modal and click **Reset**

### String property Use Cases

**Use Case:** You want to compare # videos watched between core markets - North America, Europe & China

Current: You have a property “Country”

Goal: You want to group the countries into meaningful segments

- Segment 1: North America: US & Canada
- Segment 2: Europe: UK, Germany, France, Netherlands, Italy
- Segment 3: China
- Segment 4: Rest of the World (everything but those above)

Steps

1. Add a breakdown - Country. Below is the default you’ll see

    ![/12828869626644](/12828869626644.png)

2. Choose to bucket segments, by opening the custom buckets model and click Apply
    - For each segment, choose the operator “is” and select one or more values
    - “Rest of the World” is auto generated as **remaining values**
    - To note — if two segments have the same value, the first segment will consider the value. Custom buckets are non-overlapping and sum up to 100% by definition

![/14342715436052](/14342715436052.png)

![/12828860042132](/12828860042132.png)

**You can also re-name these segments to make them meaningful to you**

1. On the same line of the segment, choose to rename it using the pencil icon
2. Click Apply after creating and naming your segments as desired

![/14342752741140](/14342752741140.png)

![/12828869956628](/12828869956628.png)

### Numeric property Use Cases

**Use Case:** You want to compare #users based on duration of video watched

Current: You have a property “watch time (mins)”

Goal: You want to distribute this in various ways

- Use Case A: Evenly in 10 min groups for the range 50-100 mins
- Use Case B: Specific groups <10, 10-20, 20-50, 50-100, ≥100
- Use Case C: Want to see all the durations as-is (No grouping)

**Deep Dive: Use Case A**: Evenly in 10 min buckets for the range 50-100 mins

1. Add a breakdown - “watch time (mins)”
    - To note — every numeric property is **auto-bucketed into even sized buckets as the default**
    - Here the default seems to be even buckets of 10 mins across the range

        ![/14342489051028](/14342489051028.png)

        ![/12828860268692](/12828860268692.png)

2. Go to the overflow and open the custom buckets modal
3. Since looking for even buckets of “30 mins”, choose **Even Bucketing**
4. Modify the min and max values of the desired range, and the bucket size, and click apply
    - To note — both a lower end and upper end bucket will be auto-generated to ensure your breakdown always adds up to 100%
    - Here these buckets are <50 mins and ≥ 100 mins

        ![/14342575096724](/14342575096724.png)

        ![/12828860573204](/12828860573204.png)


**Deep Dive: Use Case B**: Specific groups <10, 10-20, 20-50, 50-100, ≥100

1. Open the custom buckets modal
2. Since looking for specific buckets with varied bucket ranges, choose **Varied Bucketing**
3. Enter the ‘segment’ break point values in each row and click apply. You can preview the bucket as you enter values in the line-item below
    - To note — both a lower end and upper end bucket will be auto-generated to ensure your buckets always adds up to a 100%

![/14342546138516](/14342546138516.png)

![/12828860758676](/12828860758676.png)

**Deep Dive: Use Case C:** Want to see all the durations as-is (No bucketing)

1. Open the custom buckets modal
2. Since looking for “No bucketing”, choose **None —** This lays out all the numeric property values as-is

![/14342547991956](/14342547991956.png)

![/12833587659028](/12833587659028.png)

### Typecasting property Use Cases

**Use Case:** You want to identify #users of age 18 and age 60 since these are user ages where they change subscription plans (upgrade and downgrade respectively)

Current: You have a property age (years)

Goal: You want to group this in a meaningful way

- Segment 1: Age 18 (potential to upgrade)
- Segment 2: Age 60 (potential to downgrade)
- Segment 3: Every other age

Steps

1. Add a breakdown age(years). By default this will add as a numeric property
2. Since you are looking for pin-pointed years and not creating number-ranges, this is a question more common to string property data type
3. Change **Data Type** of age(years) to String. Once changed you will see the type-casted property type as an under-item
    - To note - only type-casted data types show as an under-item. If the data-type was the same as ingested, no under-item for data type will be seen

        ![/14342634016660](/14342634016660.png)

        ![/12833644608148](/12833644608148.png)

4. Post changing data-type, open the custom buckets modal. This will now open a modal meant for string property data type
5. Follow steps as elaborated for String property use-case above, and achieve the goal

    ![/14342637801748](/14342637801748.png)

    ![/14342707763604](/14342707763604.png)

    ![/12833899595284](/12833899595284.png)


## FAQ

- **Which reports does Custom Buckets work on?**

    This feature is available in the Insights, Funnels and Retention reports.

- **Which property types does this support?**

    Custom Buckets work on String, Numeric and List data type

- **Can I save a Custom Bucket**?

    No, you can’t save a custom bucket. If your custom bucket is something you or your team would like to re-use, we encourage you to instead create a [custom property](/docs/features/custom-properties#creating-a-custom-property).

- **How is custom buckets different from [custom property](/docs/features/custom-properties)?**

    Custom buckets only supports the most common custom-property use-case of **`if else`** to create meaningful segments in a more simplistic UI, and a low lift way to enable quick ad-hoc exploration. You could get this same answer using custom property too, it would just be more effort and not as intuitive

- **Can I create over-lapping segments like (US & UK) vs (US & Australia)?**

    No, breakdowns are fundamentally designed to sum up to 100%. To ensure your analysis is accurate, please create non-overlapping segments.

    If you really need to answer a question like this, the right way here is to create these as two metrics leveraging [inline filters](/docs/reports/overview) and NOT use breakdowns.

    ![/12834111393684](/12834111393684.png)

- **What happens if I change data-type, can I still use custom buckets?**

    Yes you can as long as the data-type you’ve changed the property to is supported.

- **Understanding the details:**
    - **In Numeric: Can I change the operators on the upper and lower bound?**

        No, the operators have been fixed. The lower bound is always strictly greater than (≥) and the upper bound is just lesser than (<). If you are looking for more control on the operators, please create a [custom property](/docs/features/custom-properties#creating-a-custom-property).

    - **In String: Is (not set) included in (remaining values)?**

        No, (not set) is not included in remaining values

        - (remaining values): refers to ‘set’ values that just don’t fall into any of your defined segments
        - (not set) refers to the events where a property value has not been set at tracking/ ingestion. For example a new video (MixFun) is has been added. But during tracking, you forget to send the name of this video. So the count of this video is being tracked, but it’s being associated to a property value (not set) vs (MixFun)

        More details can be found in [this help doc](/docs/features/advanced#undefined-and-null-properties)

    - **In Numeric: What is the difference between (not set) and (non-numeric values)?**
        - (not set) as explained above for string refers to property values that have not been associated to any specific property value
        - (non numeric values) refers to set values that have just been sent in as non-numeric data type. For example, you’re looking to track time spent and have coded that as a numeric property, but for some reason some values are tracked as “a”, or “b” which are not-numeric.
- **Some Common How-do-I(s)**
    - **How do I know is set, (not set)?**

        (not set) is automatically computed and will always show up in the UI. You don’t have to select (not set) as a segment to know how many events fall in there. So only figure how would you like to segment your (set) values.

        ![/12834113971348](/12834113971348.png)

    - **How do I get "not contains" or "not equal to"?**

        These values will auto-generate under (remaining values). So just select what should be included

        For example — the (remaining values) below is not equal to US or India

        ![/12834082079380](/12834082079380.png)

    - **In Number: how do I get a bucket of just 0?**

        If you’re purely looking for just how many people have value “0”, we would encourage you to typecast this to a string property and get that.

        If you’re looking to get the count of 0, in reference to the other numeric buckets, go ahead and create a **Varied Bucketing** custom buckets modal

        - If the numeric values are integers:
            - Choose Varied bucket values 0, 1, 2…
            - This would generate buckets: <0, ≥0 & <1, ≥1 & <2, ≥2.
            - ≥0 & <1 would be equal to bucket 0
        - If the numeric values are decimals:
            - Choose Varied bucket values 0, 0.0001, 1, …
            - This would generate buckets: <0, ≥0 & <0.0001, ≥0.0001 & <1, ≥1.
            - ≥0 & <0.0001 would approximate to bucket 0