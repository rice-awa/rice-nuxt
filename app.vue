<template>
	<div class="min-h-screen overflow-x-hidden">
		<!-- Banner背景 -->
		<div class="fixed top-0 left-0 right-0 h-screen pointer-events-none">
			<div class="h-full bg-gradient-to-b from-white via-[#5382DB]/40 to-[#5382DB]/30 dark:from-gray-900 dark:via-[#5382DB]/30 dark:to-transparent"></div>
		</div>

		<!-- 内容容器 -->
		<div class="relative z-10 min-h-[200vh]">
			<!-- 导航栏 -->
			<nav class="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-800/80 dark:border-gray-700">
				<div class="container mx-auto px-6">
					<div class="flex justify-between items-center h-16">
						<!-- Logo -->
						<div class="flex items-center space-x-2">
							<img src="/images/logo.webp" alt="社徽" class="w-8 h-8 md:w-10 md:h-10 object-contain" />
							<h1 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">全栈<span class="font-extrabold">FULLSTACK</span></h1>
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
					<p class="intro-text text-xl text-gray-700 mb-8 max-w-3xl mx-auto dark:text-gray-200 leading-relaxed" ref="introText">创新 · 协作 · 未来</p>
					<button class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg">了解详情</button>
				</div>
			</section>

			<!-- 其他内容区域 - 使用白色背景 -->
			<div class="relative bg-white dark:bg-gray-900">
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
								<div class="text-3xl font-bold text-blue-500 w-32 flex-shrink-0">{{ item.year }}</div>
								<div class="flex-1 p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all dark:bg-gray-800">
									<h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-300">{{ item.title }}</h3>
									<p class="text-gray-600 dark:text-gray-400">{{ item.desc }}</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="features" class="py-20">
					<div class="container mx-auto px-6">
						<h2 class="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-gray-300" ref="departmentTitle">下设部门</h2>
						<div class="grid md:grid-cols-3 gap-12">
							<!-- 编程部 -->
							<div class="department-card" ref="deptCard1">
								<div class="p-8 bg-white rounded-xl hover:shadow-xl transition-all border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
									<h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">编程部</h3>
									<div class="space-y-4">
										<p class="text-gray-600 dark:text-gray-400">其中包括：</p>
										<ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
											<li>py支部（python）</li>
											<li>CJ支部（C++、Java）</li>
											<li>程序设计</li>
											<li>自动化</li>
											<li>网页编写</li>
											<li>网络安全</li>
										</ul>
									</div>
								</div>
							</div>

							<!-- 媒体部 -->
							<div class="department-card" ref="deptCard2">
								<div class="p-8 bg-white rounded-xl hover:shadow-xl transition-all border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
									<h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">媒体部</h3>
									<div class="space-y-4">
										<p class="text-gray-600 dark:text-gray-400">其中包括：</p>
										<ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
											<li>剪辑（视频剪辑、动画）</li>
											<li>平面设计（logo、海报、周边、绘画）</li>
											<li>3维设计（3D建模、3D打印、动画CG）</li>
										</ul>
									</div>
								</div>
							</div>

							<!-- 硬件部 -->
							<div class="department-card" ref="deptCard3">
								<div class="p-8 bg-white rounded-xl hover:shadow-xl transition-all border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
									<h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">硬件部</h3>
									<div class="space-y-4">
										<p class="text-gray-600 dark:text-gray-400">其中包括：</p>
										<ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
											<li>电脑硬件（装机）</li>
											<li>机器人编程</li>
											<li>电路设计</li>
											<li>DIY</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- 加入我们 -->
				<section id="join" class="py-32 text-center bg-gray-50 dark:bg-gray-900">
					<div class="container mx-auto px-6">
						<h2 class="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-300">全栈信息处理协会</h2>
						<p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto dark:text-gray-400">“栈"在信息技术中是一种特殊的数据结构，“全栈"体现了我们包容的理念。在这里，我们欢迎每一位想从0到1，从1到100的同学共同进步！</p>
						<button class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl">立即加入</button>
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const introText = ref(null);
const departmentTitle = ref(null);
const deptCard1 = ref(null);
const deptCard2 = ref(null);
const deptCard3 = ref(null);

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

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

	// 为特色部分添加滚动动画
	const features = document.querySelectorAll("#features .container > div");
	features.forEach((feature, index) => {
		gsap.from(feature, {
			scrollTrigger: {
				trigger: feature,
				start: "top bottom-=100",
				end: "top center",
				toggleActions: "play none none none",
				once: true,
			},
			opacity: 0,
			y: 50,
			rotation: 15,
			scale: 0.8,
			duration: 0.8,
			delay: index * 0.2,
			ease: "back.out(1.7)",
		});
	});
	// 创建介绍文字的动画
	gsap.fromTo(
		introText.value,
		{
			opacity: 0,
			y: 30,
		},
		{
			opacity: 1,
			y: 0,
			duration: 1,
			delay: 2.5,
			ease: "power4.out",
		}
	);

	// 部门标题动画
	gsap.from(departmentTitle.value, {
		scrollTrigger: {
			trigger: departmentTitle.value,
			start: "top bottom-=100",
			toggleActions: "play none none reverse",
			once: true,
		},
		opacity: 0,
		y: 50,
		duration: 0.8,
	});

	// 部门卡片动画
	const cards = [deptCard1.value, deptCard2.value, deptCard3.value];
	cards.forEach((card, index) => {
		gsap.from(card, {
			scrollTrigger: {
				trigger: card,
				start: "top bottom-=50",
				toggleActions: "play none none reverse",
				once: true,
			},
			opacity: 0,
			y: 100,
			duration: 0.8,
			delay: index * 0.2,
			ease: "power2.out",
		});

		// 添加hover效果
		card.addEventListener("mouseenter", () => {
			gsap.to(card, {
				scale: 1.02,
				duration: 0.3,
				ease: "power2.out",
			});
		});

		card.addEventListener("mouseleave", () => {
			gsap.to(card, {
				scale: 1,
				duration: 0.3,
				ease: "power2.out",
			});
		});
	});

	// 为列表项添加渐入动画
	const listItems = document.querySelectorAll(".department-card li");
	listItems.forEach((item, index) => {
		gsap.from(item, {
			scrollTrigger: {
				trigger: item,
				start: "top bottom-=20",
				toggleActions: "play none none reverse",
			},
			opacity: 0,
			x: -20,
			duration: 0.5,
			delay: index * 0.1,
		});
	});

	// 为活动部分添加滚动动画
	const activities = document.querySelectorAll("#activities .grid > div");
	activities.forEach((activity, index) => {
		// 设置初始状态
		gsap.set(activity, { opacity: 0, y: 100 });
		gsap.set(activity.querySelector("img"), { scale: 1.5 });
		gsap.set(activity.querySelector("h3"), { opacity: 0, x: -30 });
		gsap.set(activity.querySelector("p"), { opacity: 0, x: -20 });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: activity,
				start: "top bottom-=100",
				end: "top center",
				toggleActions: "play none none none",
				once: true,
			},
		});

		tl.to(activity, {
			opacity: 1,
			y: 0,
			duration: 0.6,
			delay: index * 0.2,
			ease: "power2.out",
		})
			.to(
				activity.querySelector("img"),
				{
					scale: 1,
					duration: 1.2,
					ease: "power2.out",
				},
				"-=0.6" // 修改重叠时间
			)
			.to(
				activity.querySelector("h3"),
				{
					opacity: 1,
					x: 0,
					duration: 0.5,
				},
				"-=0.5" // 修改重叠时间
			)
			.to(
				activity.querySelector("p"),
				{
					opacity: 1,
					x: 0,
					duration: 0.5,
				},
				"-=0.4" // 修改重叠时间
			);
	});

	// 修改时间线部分的动画配置
	const timelineItems = document.querySelectorAll("#timeline .space-y-8 > div");
	timelineItems.forEach((item, index) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "top bottom-=100", // 当元素顶部到达视窗底部往上100px时
				end: "bottom top", // 当元素底部到达视窗顶部时
				toggleActions: "play none none none",
				once: true,
				markers: false, // 调试用，可以看到触发位置
			},
		});

		tl.fromTo(
			item.querySelector(".text-3xl"),
			{
				opacity: 0,
				x: -50,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.6,
				ease: "power2.out",
			}
		).fromTo(
			item.querySelector(".flex-1"),
			{
				opacity: 0,
				x: 50,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.6,
				ease: "power2.out",
			},
			"-=0.4"
		);
	});

	// 修改加入我们部分的动画配置
	const joinSection = document.querySelector("#join");
	const joinTl = gsap.timeline({
		scrollTrigger: {
			trigger: joinSection,
			start: "top bottom", // 修改触发位置
			end: "bottom top",
			toggleActions: "play none none none",
			once: true,
		},
	});

	joinTl
		.fromTo(
			joinSection.querySelector("h2"),
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
			}
		)
		.fromTo(
			joinSection.querySelector("p"),
			{
				opacity: 0,
				y: 30,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
			},
			"-=0.4"
		)
		.fromTo(
			joinSection.querySelector("button"),
			{
				opacity: 0,
				scale: 0.5,
			},
			{
				opacity: 1,
				scale: 1,
				duration: 0.8,
				ease: "back.out(1.7)",
			},
			"-=0.2"
		);

	// 初始化元素状态
	const initializeElements = () => {
		// 设置时间线元素的初始状态
		timelineItems.forEach((item) => {
			gsap.set(item.querySelector(".text-3xl"), { opacity: 0, x: -50 });
			gsap.set(item.querySelector(".flex-1"), { opacity: 0, x: 50 });
		});

		// 设置加入我们部分的初始状态
		if (joinSection) {
			gsap.set(joinSection.querySelector("h2"), { opacity: 0, y: 50 });
			gsap.set(joinSection.querySelector("p"), { opacity: 0, y: 30 });
			gsap.set(joinSection.querySelector("button"), { opacity: 0, scale: 0.5 });
		}
	};

	// 页面加载时初始化元素状态
	initializeElements();

	// 在页面刷新时重新初始化
	window.addEventListener("beforeunload", initializeElements);

	// 清理函数
	return () => {
		window.removeEventListener("beforeunload", initializeElements);
		ctx.revert();
	};
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
		title: "学习开发知识",
		desc: "学习有关编程知识，提升自身开发能力",
		date: "2024年6月10日",
		image: "/images/社员们正在学习编程知识.webp",
	},
	{
		title: "3D建模技术讲座",
		desc: "社团合作开展3D建模科普",
		date: "2024年6月7日",
		image: "/images/大社开展3D建模科普.webp",
	},
	{
		title: "社团文化艺术节",
		desc: "社团文化艺术节，举行有趣的社文小游戏",
		date: "2024年6月6日",
		image: "/images/开展社团文化艺术节小游戏.webp",
	},
];

const timeline = [
	{
		year: "2021.11",
		title: "社团成立",
		desc: "全栈信息技术社正式成立，确定部门，开启技术探索之旅",
	},
	{
		year: "2021.12",
		title: "开展迎新讲座--星辰大海",
		desc: "举办信息技术讲座，C++编程教学",
	},
	{
		year: "2022",
		title: "开创社团交流本",
		desc: "社团交流本以及社团明信片选定",
	},
	{
		year: "2023",
		title: "部门更新",
		desc: "新增硬件，数字媒体技术相关部门，新增部长，联络员",
	},
	{
		year: "2024",
		title: "社服与交流本",
		desc: "首套社服选定，交流本内容优化",
	},
	{
		year: "2024",
		title: "科技文化艺术节",
		desc: "首次与科技社合作开展科技游园活动",
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

.scroll-trigger-item {
	visibility: hidden; /* 初始隐藏所有动画元素 */
}

.scroll-trigger-item.is-visible {
	visibility: visible;
}

/* 确保页面有足够的滚动空间 */
#timeline,
#join {
	min-height: 50vh; /* 确保每个部分都有足够的高度 */
	display: flex;
	flex-direction: column;
	justify-content: center;
}

/* 响应式调整 */
@media (max-width: 768px) {
	.container {
		padding-left: 1rem;
		padding-right: 1rem;
		max-width: 100%;
		overflow-x: hidden;
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
	transition: background-image 1s cubic-bezier(0.4, 0, 0.2, 1);
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
	transition: opacity 1s ease;
}

/* Banner背景渐变效果 */
.bg-gradient-to-b {
	background-size: 100% 100%;
	transition: background-image 1s ease;
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
	transition: background-color 1s ease;
}

/* 添加一些过渡效果的辅助类 */
.gsap-reveal {
	visibility: hidden;
}

/* 优化滚动性能 */
.smooth-scroll {
	will-change: transform;
}

/* 确保动画元素有正确的变换原点 */
#features .container > div,
#activities .grid > div,
#timeline .space-y-8 > div {
	transform-origin: center center;
}

/* 优化时间线样式 */
#timeline .space-y-8 > div {
	opacity: 1;
	transform: none;
}

/* 优化性能相关的样式 */
.will-change-transform {
	will-change: transform;
}

.will-change-opacity {
	will-change: opacity;
}

/* 只在动画过程中应用 will-change */
.animating {
	will-change: transform, opacity;
}

/* 确保年份显示正确 */
#timeline .text-3xl {
	white-space: nowrap;
	text-align: right;
	padding-right: 1rem;
}

/* 优化加入我们部分的按钮样式 */
#join button {
	position: relative;
	overflow: hidden;
}

#join button::before {
	content: "";
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
	transition: left 0.5s;
}

#join button:hover::before {
	left: 100%;
}

/* 在 style 标签中添加 */
.scroll-trigger-item {
	visibility: hidden; /* 初始隐藏所有动画元素 */
}

.scroll-trigger-item.is-visible {
	visibility: visible;
}

/* 确保页面有足够的滚动空间 */
#timeline,
#join {
	min-height: 50vh; /* 确保每个部分都有足够的高度 */
	display: flex;
	flex-direction: column;
	justify-content: center;
}

/* 添加以下样式来防止水平溢出 */
html,
body {
	overflow-x: hidden;
	width: 100%;
	position: relative;
}

/* 确保动画不会导致水平溢出 */
.gsap-reveal,
.scroll-trigger-item {
	overflow-x: hidden;
}

/* 添加新的样式 */
.department-card {
	transition: transform 0.3s ease;
}

.department-card:hover {
	transform: translateY(-5px);
}

.department-card li {
	transition: color 0.3s ease;
}

.department-card:hover li {
	color: currentColor;
}

/* 确保列表样式正确显示 */
.list-disc {
	list-style-type: disc;
	margin-left: 1.5rem;
}
</style>
