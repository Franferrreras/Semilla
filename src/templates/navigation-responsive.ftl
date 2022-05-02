<div id="mainMenuResponsive" class="evr-main-navigation--responsive sidenav-fixed sidenav-container visible-xs visible-sm visible-md closed">
	<div class="sidenav-menu-slider">
		<div class="sidebar sidebar-default sidenav-menu">

			<div class="evr-flex__row-btw">
				<div>
					<h1 class="site-title clearfix">
						<a class="${logo_css_class}" href="${home_url}" title="<@liferay.language_format arguments="${site_name}" key="go-to-x" />">
							<span class="sr-only">${site_name}</span>
							<img alt="" src="${site_logo}" />
						</a>
					</h1>
				</div>
				<button id="toggleMainMenuClose" type="button" class="toggleMainMenu btn btn-icon sidenav-toggler" data-target="#mainMenuResponsive">
					<span class=""></span>
					<span class=""></span>
					<span class=""></span>
				</button>
			</div>
			<div>
			<#include "${full_templates_path}/navigation.ftl" />
			</div>
		</div>
	</div>
</div>
<div class="evr-overlay"></div>