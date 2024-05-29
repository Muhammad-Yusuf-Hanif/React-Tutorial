import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import Heading from "../common/Heading";
import Text from "../common/Text";
import ImageLink from "../common/Image";
import linkedInImg from "../assets/linkedin.png";
import gitHubIcon from "../assets/githubIcon.gif";

function Home() {
	const navigate = useNavigate();

	function viewProjects(path: string) {
		navigate(path);
	}

	return (
		<div>
			<Heading
				className="font-medium italic pl-16 mt-14 animate-bounce"
				size="sm"
				text="Muhammad Yusuf Hanif"
			/>

			<div className="flex flex-col w-full h-[100vh] p-4 bg-white lg:flex-row">
				<div className="flex w-16 mr-4 mt-2 lg:flex-col lg:w-10">
					<ImageLink
						src={linkedInImg}
						href="https://www.linkedin.com/in/muhammad-yusuf-hanif-147954241/"
						alt="LinkedIn Image"
						className="w-8 mb-2"
					/>
					<ImageLink
						src={gitHubIcon}
						href="https://github.com/Muhammad-Yusuf-Hanif"
						alt="LinkedIn Image"
						className="w-8"
					/>
				</div>
				<div className="flex flex-col md:flex-row w-full">
					<div className="flex-1">
						<div className="text-6xl text-cyan-700 mb-5">Welcome</div>
						<div className="font-medium">
							My name is Muhammad Yusuf Hanif, and I am based in the West
							Midlands.
							<br />
							<br />I am a front-end web developer based in Birmingham, UK. I
							have a strong proficiency in a range of technologies including
							HTML, CSS, C++, Linux, JavaScript, MySQL, ReactJS, and TypeScript.
							This can be seen in multiple projects that I have built. Please
							explore the links on the right for examples of my projects.
						</div>
					</div>
					<div className="flex-1 mt-4 md:mt-0 md:pl-20">
						<Text text="Projects" additionalClasses="pl-36" />
						<div className="mt-4">
							<div className="flex gap-1">
								<Button
									additionalClasses="w-1/2 md:w-44"
									text="React Projects"
									onClick={() => viewProjects("/projects")}
								/>
								<Button
									additionalClasses="w-1/2 md:w-44"
									text="Gym Website"
									onClick={() =>
										window.open("https://itsagymthing.netlify.app/")
									}
								/>
							</div>
							<div className="flex gap-1 mt-2">
								<Button
									additionalClasses="w-1/2 md:w-44"
									text="Calculator"
									onClick={() =>
										window.open("https://myonlinecalc.netlify.app")
									}
								/>
								<Button
									additionalClasses="w-1/2 md:w-44"
									text="Weather API"
									onClick={() =>
										window.open("https://api-for-weather.netlify.app")
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
