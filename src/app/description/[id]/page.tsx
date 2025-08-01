import { CalendarDays,Calendar, Clock4, PlusCircle , MapPin, CheckCircle, Key } from "lucide-react";
import { fetchOpportunitiesbyid } from "@/lib/fetchOpportunities";



export default async function JobDescription({params}: {params: {id:string}}) {
  const jobDesc = await fetchOpportunitiesbyid(params.id);
  console.log(jobDesc.idealCandidate.split("\n"));
  console.log(jobDesc);

  if (!jobDesc) {
    return <div>Job not found</div>;
  }
  
  return (
    <main className="min-h-screen flex bg-white text-black p-[32px] gap-[62px] mx-auto w-[1229px] h-[1064px] font-sans">
      <section className=" w-[815px] h-[1000px] py-[46px] space-y-16 gap-[55px]">
        <div className=" w-[815px]  gap-[16px]  ">
          <h2 className=" w-[147px] h-[29px] mb-2 text-[24px] leading-[120%] font-black ">
            Description
          </h2>
          <p className=" w-[815px]  text-[16px] leading-[160%] ">
            {jobDesc.description}
          </p>
        </div>

        <div className="w-[815px]  font-black">
          <h2 className="w-[202px] text-[24px] leading-[120%] mb-2">
            Responsibilities
          </h2>

          <ul className="w-[815px] list-disc list-inside space-y-3 leading-relaxed">
            {jobDesc.responsibilities.split("\n").map((text: any, index:number) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle
                  className="text-[#56CDAD] mt-[4px] min-w-[18px]"
                  size={18}
                />
                <span className="text-[16px] font-[400]">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className=" w-[815px]   gap-[16px] ">
          <h2 className="text-[24px] leading-[120%] font-bold w-[310px] mb-4 h-[29px] ">
            Ideal Candidate we want
          </h2>
          <ul className="list-disc list-inside space-y-2 w-[815px] text-[16px] ">
            {/* <li>
              Young ({job?.ideal_candidate.age} year old){" "}
              {job?.ideal_candidate.gender} social media manager
            </li> */}
            {(jobDesc?.idealCandidate?.split("\n") || [])
              .filter((item:any) => item.trim() !== "")
              .map((item:any, index:number) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">When & Where</h2>
          <div className="flex items-start gap-2">
            <MapPin className="text-blue-600 mt-1" size={18} />
            <p>{jobDesc?.whenAndWhere}</p>
          </div>
        </div>
      </section>

      <aside className=" w-[293.5px] h-[674px] gap-[20px] ">
        <div>
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="text-sm space-y-3 mb-7">
            <li className="flex items-center gap-3 w-[142px] ">
              <div className="p-2 rounded-full border-[1px] border-[#D6DDEB] ">
                <PlusCircle className="text-[#26A4FF] " size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">Posted On:</h4>{" "}
                <h4 className=" text-black ">{jobDesc?.datePosted}</h4>
              </span>
            </li>
            <li className="flex items-center w-[146px] h-[52px] gap-[16px]">
              <div className=" p-2 rounded-full border-[1px] border-[#D6DDEB]">
                <CalendarDays className="text-[#26A4FF]" size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">Deadline:</h4>
                <h4 className=" text-black ">{jobDesc?.deadline}</h4>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className=" p-2 rounded-full border-[1px] border-[#D6DDEB]">
                <MapPin className="text-[#26A4FF]" size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">Location:</h4>
                <h4 className=" text-black">{jobDesc?.location[0]}</h4>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className=" p-2 rounded-full border-[1px] border-[#D6DDEB]">
                <CalendarDays className="text-[#26A4FF]" size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">Start Date:</h4>
                <h4 className=" text-black ">{jobDesc?.startDate}</h4>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className=" p-2 border-[1px] rounded-full border-[#D6DDEB]">
                <CalendarDays className="text-[#26A4FF]" size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">End Date:</h4>
                <h4 className=" text-black ">{jobDesc?.endDate}</h4>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <div className="flex gap-2 mb-7 text-sm">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
              {jobDesc?.categories[0]}
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
              {jobDesc?.categories[1]}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-2 mb-2 text-sm">
            {jobDesc?.requiredSkills.map((item:any, index:number) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
