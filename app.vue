<template>
	<div class="min-h-screen">
		<!-- Banner背景 -->
		<div class="fixed top-0 left-0 right-0 h-screen pointer-events-none">
			<div class="h-full bg-gradient-to-b from-white via-[#5382DB]/40 to-[#5382DB]/30 dark:from-gray-900 dark:via-[#5382DB]/30 dark:to-transparent"></div>
		</div>

		<!-- 内容容器 -->
		<div class="relative z-10">
			<!-- 导航栏 -->
			<nav class="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-800/80 dark:border-gray-700">
				<div class="container mx-auto px-6">
					<div class="flex justify-between items-center h-16">
						<!-- Logo -->
						<div class="flex items-center">
							<h1 class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">全栈<span class="font-extrabold">FULLSTACK</span></h1>
						</div>

						<!-- 导航链接 -->
						<div class="hidden md:flex items-center space-x-8">
							<NuxtLink v-for="(link, index) in navLinks" :key="index" :to="link.href" class="text-gray-600 hover:text-blue-500 transition-all duration-300 text-sm font-medium nav-link dark:text-gray-300 dark:hover:text-blue-400" @click.prevent="scrollToSection(link.href)">
								{{ link.text }}
							</NuxtLink>

							<!-- 主题切换按钮 -->
							<button @click="toggleDarkMode" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
								<svg v-if="isDarkMode" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
								</svg>
								<svg v-else class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>

			<!-- 移动端菜单按钮 -->
			<div class="md:hidden fixed top-4 right-4 z-50">
				<button class="p-2 bg-gray-100 rounded-lg dark:bg-gray-800" @click="isMobileMenuOpen = !isMobileMenuOpen">
					<svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16" />
						<path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- 移动端导航菜单 -->
			<Transition enter-active-class="transition duration-200 ease-out" enter-from-class="transform translate-x-full opacity-0" enter-to-class="transform translate-x-0 opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-x-0 opacity-100" leave-to-class="transform translate-x-full opacity-0">
				<div v-if="isMobileMenuOpen" class="md:hidden fixed inset-y-0 right-0 z-40 w-64 bg-white dark:bg-gray-900 pt-20 shadow-lg">
					<div class="px-6">
						<div class="flex flex-col space-y-6">
							<NuxtLink v-for="(link, index) in navLinks" :key="index" :to="link.href" class="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400" @click="handleMobileNavClick(link.href)">
								{{ link.text }}
							</NuxtLink>

							<!-- 移动端主题切换按钮 -->
							<button @click="toggleDarkMode" class="flex items-center space-x-2 text-lg font-medium text-gray-900 dark:text-gray-100">
								<span>{{ isDarkMode ? "浅色模式" : "深色模式" }}</span>
								<div class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
									<svg v-if="isDarkMode" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
									</svg>
									<svg v-else class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
										<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
									</svg>
								</div>
							</button>
						</div>
					</div>
				</div>
			</Transition>

			<!-- Banner部分 -->
			<section class="h-screen flex items-center justify-center relative">
				<div class="container mx-auto px-6 text-center">
					<h2 ref="titleRef" class="text-6xl md:text-7xl font-bold mb-6 drop-shadow-sm flex flex-col gap-4">
						<div class="flex justify-center">
							<span v-for="(char, index) in titleLines.line1" :key="`line1-${index}`" class="line1-char inline-block bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400">{{ char }}</span>
						</div>
						<div class="flex justify-center">
							<span v-for="(char, index) in titleLines.line2" :key="`line2-${index}`" class="line2-char inline-block bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400">{{ char }}</span>
						</div>
					</h2>
					<p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto dark:text-gray-200">创新 · 协作 · 未来</p>
					<button class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg">加入我们</button>
				</div>
			</section>

			<!-- 其他内容区域 - 使用白色背景 -->
			<div class="relative bg-white dark:bg-gray-900">
				<section id="features" class="py-20">
					<div class="container mx-auto px-6 grid md:grid-cols-4 gap-8">
						<div v-for="(feature, index) in features" :key="index" class="p-8 bg-white rounded-xl hover:shadow-xl transition-all border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
							<div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<Icon :name="feature.icon" class="w-8 h-8 text-blue-500" />
							</div>
							<h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-300">{{ feature.title }}</h3>
							<p class="text-gray-600 dark:text-gray-400">{{ feature.desc }}</p>
						</div>
					</div>
				</section>

				<!-- 近期活动 -->
				<section id="activities" class="py-20 bg-gray-50 dark:bg-gray-900">
					<div class="container mx-auto px-6">
						<h2 class="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-300">近期活动</h2>
						<div class="grid lg:grid-cols-3 gap-8">
							<div v-for="activity in activities" :key="activity.title" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all dark:bg-gray-800">
								<div class="w-full h-48 bg-blue-100 rounded-lg mb-6 overflow-hidden">
									<img :src="activity.image" :alt="activity.title" class="w-full h-full object-cover" />
								</div>
								<h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-300">{{ activity.title }}</h3>
								<p class="text-gray-600 mb-4 dark:text-gray-400">{{ activity.desc }}</p>
								<p class="text-blue-500">{{ activity.date }}</p>
							</div>
						</div>
					</div>
				</section>

				<!-- 发展历程 -->
				<section id="timeline" class="py-20">
					<div class="container mx-auto px-6">
						<h2 class="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-300">发展历程</h2>
						<div class="space-y-8">
							<div v-for="item in timeline" :key="item.year" class="flex items-center gap-8 group">
								<div class="text-3xl font-bold text-blue-500 w-24">{{ item.year }}</div>
								<div class="flex-1 p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all dark:bg-gray-800">
									<h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-300">{{ item.title }}</h3>
									<p class="text-gray-600 dark:text-gray-400">{{ item.desc }}</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- 加入我们 -->
				<section id="join" class="py-32 text-center bg-gray-50 dark:bg-gray-900">
					<div class="container mx-auto px-6">
						<h2 class="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-300">加入全栈信息处理协会</h2>
						<p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto dark:text-gray-400">加入我们，一起探索技术的无限可能</p>
						<button class="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl">立即加入</button>
					</div>
				</section>

				<!-- 页脚 -->
				<footer class="bg-gray-900 text-gray-400 py-12">
					<div class="container mx-auto px-4">
						<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
							<!-- 资源 -->
							<div>
								<h3 class="text-white text-lg font-semibold mb-4">资源</h3>
								<ul class="space-y-2">
									<li><NuxtLink to="/support" class="hover:text-white">支持</NuxtLink></li>
									<li><NuxtLink to="/blog" class="hover:text-white">博客</NuxtLink></li>
									<li><NuxtLink to="/security" class="hover:text-white">安全</NuxtLink></li>
								</ul>
							</div>

							<!-- 开发人员 -->
							<div>
								<h3 class="text-white text-lg font-semibold mb-4">开发人员</h3>
								<ul class="space-y-2">
									<li><NuxtLink to="/api" class="hover:text-white">API 文档</NuxtLink></li>
									<li><NuxtLink to="/teams-api" class="hover:text-white">Teams API</NuxtLink></li>
									<li><NuxtLink to="/docs" class="hover:text-white">开发指南</NuxtLink></li>
								</ul>
							</div>

							<!-- 关于 -->
							<div>
								<h3 class="text-white text-lg font-semibold mb-4">关于</h3>
								<ul class="space-y-2">
									<li><NuxtLink to="/about" class="hover:text-white">关于我们</NuxtLink></li>
								</ul>
							</div>
						</div>

						<div class="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
							<div class="text-sm">© 2024 全栈信息处理协会. 保留所有权利.</div>
							<div class="flex space-x-6 mt-4 md:mt-0">
								<a href="#" class="text-gray-400 hover:text-white">
									<span class="sr-only">Facebook</span>
									<i class="fab fa-facebook"></i>
								</a>
								<a href="#" class="text-gray-400 hover:text-white">
									<span class="sr-only">Twitter</span>
									<i class="fab fa-twitter"></i>
								</a>
								<a href="#" class="text-gray-400 hover:text-white">
									<span class="sr-only">GitHub</span>
									<i class="fab fa-github"></i>
								</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import gsap from "gsap";

const isDarkMode = ref(false);
// 将 isMobileMenuOpen 移到顶层作用域
const isMobileMenuOpen = ref(false);

// 处理移动端导航点击
const handleMobileNavClick = (href) => {
	scrollToSection(href);
	isMobileMenuOpen.value = false;
};

// 在组件挂载时初始化主题
onMounted(() => {
	// 检查本地存储的主题设置
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme) {
		isDarkMode.value = savedTheme === "dark";
		// 立即应用保存的主题
		updateTheme();
	} else {
		// 检查系统主题偏好
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		isDarkMode.value = prefersDark;
		updateTheme();
	}

	// 监听系统主题变化
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
		isDarkMode.value = e.matches;
		updateTheme();
	});

	// 创建GSAP上下文
	const ctx = gsap.context(() => {
		// 获取所有标题字符
		const chars = titleRef.value.querySelectorAll("span");

		// 设置初始状态
		gsap.set(chars, {
			opacity: 0,
			y: 40, // 初始位置略微向下，增加幅度
		});

		// 创建时间轴
		const tl = gsap.timeline();

		// 第一行文字动画
		const line1Chars = titleRef.value.querySelectorAll(".line1-char");
		tl.to(line1Chars, {
			duration: 0.6, // 动画持续时间
			opacity: 1, // 目标透明度
			y: 0, // 目标位置
			stagger: 0.1, // 字符之间的延迟
			ease: "power2.out", // 动画缓动效果
		})
			// 第二行文字动画
			.to(
				titleRef.value.querySelectorAll(".line2-char"),
				{
					duration: 0.6, // 动画持续时间
					opacity: 1, // 目标透明度
					y: 0, // 目标位置
					stagger: 0.05, // 字符之间的延迟
					ease: "power2.out", // 动画缓动效果
				},
				"-=0.3" // 与前一个动画重叠的时间
			)
			// 所有字符的下落动画
			.to(
				chars,
				{
					duration: 0.8, // 动画持续时间
					y: "+=20", // 向下移动的距离
					ease: "elastic.out(1, 0.4)", // 动画缓动效果
					stagger: {
						amount: 0.5, // 随机下落的时间
						from: "random", // 从随机字符开始
					},
				},
				"+=0.4" // 等待时间后开始下落动画
			);
	}, titleRef);

	// 监听滚动以关闭菜单
	window.addEventListener("scroll", () => {
		if (isMobileMenuOpen.value) {
			isMobileMenuOpen.value = false;
		}
	});

	// 监听菜单状态变化
	watch(isMobileMenuOpen, (isOpen) => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	});

	// 清理函数
	return () => ctx.revert();
});

// 更新主题
const updateTheme = () => {
	if (isDarkMode.value) {
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
};

// 切换主题
const toggleDarkMode = () => {
	isDarkMode.value = !isDarkMode.value;
	updateTheme();
};

const navLinks = [
	{ text: "社团特色", href: "#features" },
	{ text: "近期活动", href: "#activities" },
	{ text: "发展历程", href: "#timeline" },
	{ text: "加入我们", href: "#join" },
];

const features = [
	{
		icon: "ph:code-bold",
		title: "前沿技术",
		desc: "掌握最新开发工具与框架",
	},
	{
		icon: "ph:lightbulb-bold",
		title: "创新项目",
		desc: "参与多个创新项目的开发",
	},
	{
		icon: "ph:users-bold",
		title: "团队合作",
		desc: "与团队成员合作完成项目",
	},
	{
		icon: "ph:graduation-cap-bold",
		title: "实践经验",
		desc: "获得实践经验和技能提升",
	},
];

const activities = [
	{
		title: "黑客马拉松",
		desc: "48小时极限编程挑战，展现创意与技术的完美融合",
		date: "2024年3月15日",
		image: "/images/hackathon.jpg",
	},
	{
		title: "技术讲座",
		desc: "业界大牛分享前沿技术与发展趋势",
		date: "2024年3月20日",
		image: "/images/tech-talk.jpg",
	},
	{
		title: "项目实战",
		desc: "真实项目开发体验，提升实战能力",
		date: "2024年4月1日",
		image: "/images/project.jpg",
	},
];

const timeline = [
	{
		year: "2023",
		title: "全国科技创新大赛金奖",
		desc: "团队开发的智能校园项目获得全国大赛金奖",
	},
	{
		year: "2022",
		title: "首届黑客马拉松",
		desc: "成功举办校园首届黑客马拉松大赛",
	},
	{
		year: "2021",
		title: "社团成立",
		desc: "全栈信息技术社正式成立，开启技术探索之旅",
	},
];

const scrollToSection = (href) => {
	const el = document.querySelector(href);
	if (el) {
		el.scrollIntoView({ behavior: "smooth" });
	}
};

const titleRef = ref(null);

// 定义标题文字和字符透明度数组
const titleLines = {
	line1: "探索数字宇宙".split(""),
	line2: "FULLSTACK".split(""),
};
</script>

<style>
/* 自定义动画 */
@keyframes fade-in-up {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fade-in-up {
	animation: fade-in-up 1s ease-out forwards;
}

/* 毛玻璃效果 */
.backdrop-blur-md {
	-webkit-backdrop-filter: blur(12px);
	backdrop-filter: blur(12px);
}

/* 导航链接样式 */
.nav-link {
	position: relative;
	padding: 0.5rem 0;
}

.nav-link::after {
	content: "";
	position: absolute;
	bottom: -2px;
	left: 0;
	width: 0;
	height: 2px;
	@apply bg-gradient-to-r from-blue-500 to-purple-600;
	transition: width 0.3s ease;
}

.nav-link:hover::after {
	width: 100%;
}

/* 确保所有文本清晰可见 */
h1,
h2,
h3,
p {
	text-shadow: none;
}

/* 按钮样式优化 */
button {
	font-weight: 500;
	letter-spacing: 0.025em;
}

/* 响应式调整 */
@media (max-width: 768px) {
	.container {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	h1 {
		font-size: clamp(1.5rem, 10vw, 5rem);
	}

	.nav-link {
		padding: 0.75rem 0;
	}
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

/* 添加到现有的 style 标签中 */
html {
	scroll-behavior: smooth;
	scroll-padding-top: 80px;
}

/* 确保暗模式文本可读性 */
.dark text-gray-300 {
	color: rgba(209, 213, 219, var(--tw-text-opacity));
}

/* 添加过渡效果 */
:root {
	transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}

/* 为所有可能需要过渡的元素添加过渡效果 */
*,
::before,
::after {
	transition: background-color 0.5s ease, border-color 0.5s ease, color 0.5s ease, opacity 0.5s ease, transform 0.5s ease;
}

/* 为渐变背景添加过渡效果 */
.from-gray-50,
.to-white,
.dark\:from-gray-900,
.dark\:to-black {
	transition: background-image 0.5s ease;
}

/* 优化一些不需要过渡的属性 */
.transition-none,
.transition-none::before,
.transition-none::after {
	transition: none !important;
}

/* 为导航栏背景模糊效果添加平滑过渡 */
nav {
	transition: background-color 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease;
}

/* 为卡片和容器添加过渡效果 */
.bg-white,
.dark\:bg-gray-800,
.bg-gray-50,
.dark\:bg-gray-900 {
	transition: background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
}

/* 添加到现有的 style 标签中 */
.inline-block {
	display: inline-block;
	overflow: hidden;
}

/* 添加字符动画样式 */
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.char-animate {
	animation: fadeInUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* 添加字符动画相关样式 */
.char-enter-active {
	transition: all 0.5s cubic-bezier(0.3, 0, 0.2, 1);
}

.char-enter-from {
	opacity: 0;
	transform: translateY(20px);
}

.char-enter-to {
	opacity: 1;
	transform: translateY(0);
}

/* 为标题字符添加悬停效果 */
h2 span {
	display: inline-block;
	cursor: default;
}

h2 span:hover {
	animation: bounce 0.7s cubic-bezier(0.25, 0, 0.2, 1);
	background-image: linear-gradient(to right bottom, #3b82f6, #6163f4, #7f4af8);
	-webkit-background-clip: text;
	background-clip: text;
}

@keyframes bounce {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-5px);
	}
}

/* 添加背景动画过渡 */
.bg-gradient-to-b,
.bg-gradient-to-br {
	background-size: 200% 200%;
	transition: background-position 0.5s ease-in-out;
}

.bg-gradient-to-b:hover,
.bg-gradient-to-br:hover {
	background-position: 0 100%;
}

/* 优化按钮悬停效果 */
button.bg-gradient-to-r {
	background-size: 200% auto;
	transition: all 0.3s ease;
}

button.bg-gradient-to-r:hover {
	background-position: right center;
}

/* 防止移动端菜单打开时页面滚动 */
.overflow-hidden {
	overflow: hidden;
}

/* 移动端菜单动画 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

/* 添加背景渐变过渡效果 */
.fixed.inset-0 {
	transition: background-image 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 确保内容区域有适当的背景透明度 */
.bg-white\/95 {
	backdrop-filter: blur(10px);
}

.dark .bg-gray-900\/95 {
	backdrop-filter: blur(8px);
}

/* 优化内容区域的阴影，增加层次感 */
.relative.z-10 {
	box-shadow: 0 -1px 20px -8px rgba(0, 0, 0, 0.1);
}

/* 深色模式下的阴影 */
.dark .relative.z-10 {
	box-shadow: 0 -1px 20px -8px rgba(0, 0, 0, 0.3);
}

/* 为内容区域添加渐变边框效果 */
.relative.z-10::before {
	content: "";
	position: absolute;
	top: -1px;
	left: 0;
	right: 0;
	height: 1px;
	background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.05), transparent);
}

.dark .relative.z-10::before {
	background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05), transparent);
}

/* 优化背景渐变过渡 */
.fixed {
	transition: opacity 0.8s ease;
}

/* Banner背景渐变效果 */
.bg-gradient-to-b {
	background-size: 100% 100%;
	transition: background-image 0.8s ease;
}

/* 导航栏模糊效果 */
nav {
	-webkit-backdrop-filter: blur(8px);
	backdrop-filter: blur(8px);
}

/* 确保内容区域有适当的层级和过渡 */
.relative.z-10 {
	isolation: isolate;
}

/* 深色模式过渡 */
:root {
	transition: background-color 0.8s ease;
}
</style>
