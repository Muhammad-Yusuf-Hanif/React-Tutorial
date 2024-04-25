import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import Heading from "../common/Heading";
import Text from "../common/Text";

function Home() {
	const navigate = useNavigate();

	function viewProjects(path: string) {
		navigate(path);
	}

	return (
		<div className="flex flex-col w-full h-[100vh] p-20 bg-">
			<Heading
				className="animate-bounce"
				size="sm"
				text="Muhammad Yusuf Hanif"
			/>

			<div className="flex gap-2">
				<div className="w-1/2">
					<div className="pt-20 text-6xl text-cyan-700 mb-5">Welcome</div>
					<div className="font-medium">
						My name is Muhammad Yusuf Hanif, and I am based in the West
						Midlands.
						<br />
						<br />I am a front-end web developer based in Birmingham, UK. I have
						a strong proficiency in a range of technologies including HTML, CSS,
						C++, Linux, JavaScript, MySQL, ReactJS, and TypeScript. This can be
						seen in multiple projects that I have built. Please explore the
						links on the right for examples of my projects.
					</div>
				</div>
				<div className="pt-14 ml-56">
					<Text text="Projects" />
					<div className="mt-4">
						<div className="flex gap-1 w-[110%] justify-between">
							<img src="../assets/react.png" />
							{/* <Button additionalClasses="w-1/2"
								text="React Projects"
								onClick={() => viewProjects("/projects")}
							/> */}
							<Button
								additionalClasses="w-1/2"
								text="Gym Website"
								onClick={() =>
									(window.location.href = "https://itsagymthing.netlify.app/")
								}
							/>
						</div>
						<div className="flex gap-1 justify-between w-[110%]">
							<Button
								additionalClasses="w-1/2"
								text="Calculator"
								onClick={() =>
									(window.location.href = "https://myonlinecalc.netlify.app")
								}
							/>
							<Button
								additionalClasses="w-1/2"
								text="Weather API"
								onClick={() =>
									(window.location.href = "https://api-for-weather.netlify.app")
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
