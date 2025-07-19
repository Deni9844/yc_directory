import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";

const View = async ({ id }: { id: string }) => {
  // Increment the view count
  const { views: currentViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  await writeClient
    .patch(id)
    .set({ views: currentViews + 1 })
    .commit();

  // Re-fetch updated views
  const { views: updatedViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">
          {updatedViews > 1 ? "Views" : "View"}: {updatedViews}
        </span>
      </p>
    </div>
  );
};

export default View;