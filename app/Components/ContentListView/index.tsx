import classNames from "~/utils/classNames";
import textGradientClass from "~/utils/textGradientClass";

interface ContentListViewProp {
  short?: boolean;
  title: string;
  titleClass?: string;
  description: string;
  descriptionClass?: string;
  contentListViewClass?: string;
}

export default function ContentListView({
  title,
  titleClass = "",
  description,
  descriptionClass = "",
  contentListViewClass = "",
  short = true
}: ContentListViewProp) {
  return (
    <div className={classNames("flex flex-col justify-center mb-4", contentListViewClass)}>
      <div>
        <span
          className={classNames(
            "text-lg font-medium",
            textGradientClass(),
            titleClass
          )}
        >
          {title}
        </span>
        <p
          className={classNames(
            "text-base font-leagueSpartan text-textcolormain mt-[10px]",
            descriptionClass
          )}
        >
          {description}
        </p>
      </div>
      {/** TODO: display tags for the content when short is false */}
      {short ? null : <></>}
    </div>
  )
}