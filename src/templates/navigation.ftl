<#assign layoutLocalServiceUtil = serviceLocator.findService("com.liferay.portal.kernel.service.LayoutLocalService")>
<#assign groupLocalService = serviceLocator.findService("com.liferay.portal.kernel.service.GroupLocalService")>

<nav class="${nav_css_class} evr-main-navigation" data-menuResponsive='initial' id="navigation" role="navigation">
	<h1 class="hide-accessible"><@liferay.language key="navigation" /></h1>
	<#if !site_ventana_group_id?has_content>
		<#assign site_ventana_group_id = site_actual_group_id />
		<#assign groupFriendlyUrl = groupLocalService.getGroup(site_ventana_group_id?number).getFriendlyURL() />
		<#assign urlGroup = ventanaUrl>
	<#else>
		<#assign groupFriendlyUrl = groupLocalService.getGroup(site_ventana_group_id?number).getFriendlyURL() />
		<#assign urlGroup = ventanaUrl>
	</#if>
	<#if site_actual_group_id?number == site_ventana_group_id?number>
	<ul class="evr-main-navigation__list" aria-label="<@liferay.language key="site-pages" />" role="menubar">
		<#list nav_items as nav_item>
			<#assign
				nav_item_attr_has_popup = ""
				nav_item_attr_selected = ""
				nav_item_css_class = ""
				nav_item_layout = nav_item.getLayout()
			/>

			<#if nav_item.isSelected()>
				<#assign
					nav_item_attr_has_popup = "aria-haspopup='true'"
					nav_item_attr_selected = "aria-selected='true'"
					nav_item_css_class = "selected active"
				/>
			</#if>
				<#if nav_item.hasChildren()>
				<li ${nav_item_attr_selected} class="evr-main-navigation__item ${nav_item_css_class} hasChildren" id="layout_${nav_item.getLayoutId()}" role="presentation" tabindex="0">
					<span class="evr-main-navigation__link evr-main-navigation__link--dropdown" aria-labelledby="layout_${nav_item.getLayoutId()}" role="menuitem"><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</span>
					<button type="button" class="hidden-xl hidden-lg evr-main-navigation__link-icon"></button>
					<div class="wpr_child-menu">
						<ul class="child-menu" role="menu">
							<li class="hidden" id="layout_${nav_item.getLayoutId()}" role="presentation">
								<a aria-labelledby="layout_${nav_item.getLayoutId()}" role="menuitem" href="${nav_item.getURL()}">${nav_item.getName()}</a>
							</li>
						<#list nav_item.getChildren() as nav_child>
							<#assign
								nav_child_attr_selected = ""
								nav_child_css_class = ""
							/>

							<#if nav_item.isSelected()>
								<#assign
									nav_child_attr_selected = "aria-selected='true'"
									nav_child_css_class = "selected"
								/>
							</#if>

							<li ${nav_child_attr_selected} class="evr-main-navigation__submenu-item ${nav_child_css_class}" id="layout_${nav_child.getLayoutId()}" role="presentation" tabindex="0">
								<a aria-labelledby="layout_${nav_child.getLayoutId()}" class="evr-main-navigation__submenu-link" href="${nav_child.getURL()}" ${nav_child.getTarget()} role="menuitem">${nav_child.getName()}</a>
							</li>
						</#list>
						</ul>
					</div>
					</li>
				<#else>
				<li ${nav_item_attr_selected} class="evr-main-navigation__item ${nav_item_css_class}" id="layout_${nav_item.getLayoutId()}" role="presentation" tabindex="0">
					<a class="evr-main-navigation__link" aria-labelledby="layout_${nav_item.getLayoutId()}" ${nav_item_attr_has_popup} href="${nav_item.getURL()}" ${nav_item.getTarget()} role="menuitem"><span><b><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</b></span></a>
				</li>
				</#if>
		</#list>
	</ul>
	<#else>
		<#assign navigation_items_vv = layoutLocalServiceUtil.getLayouts(site_ventana_group_id?number, false) />
		<ul class="evr-main-navigation__list" aria-label="<@liferay.language key="site-pages" />" role="menubar">
		<#list navigation_items_vv as nav_item>
			<#assign
				nav_item_attr_has_popup = ""
				nav_item_attr_selected = ""
				nav_item_css_class = ""
				nav_item_layout = nav_item
			/>

			<#if nav_item.isSelected(true, nav_item, nav_item.getAncestorPlid()) >
				<#assign
					nav_item_attr_has_popup = "aria-haspopup='true'"
					nav_item_attr_selected = "aria-selected='true'"
					nav_item_css_class = "selected active"
				/>
			</#if>
			<#if !nav_item.isHidden() && nav_item.getParentLayoutId() == 0>
				<#if nav_item.hasChildren()>
				<li ${nav_item_attr_selected} class="evr-main-navigation__item ${nav_item_css_class} hasChildren id="layout_${nav_item.getLayoutId()}" role="presentation">
					<span class="evr-main-navigation__link evr-main-navigation__link--dropdown" aria-labelledby="layout_${nav_item.getLayoutId()}" role="menuitem"><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</span>
					<button type="button" class="hidden-xl hidden-lg evr-main-navigation__link-icon"></button>
					<div class="wpr_child-menu">
						<ul class="child-menu" role="menu">
							<li class="hidden" id="layout_${nav_item.getLayoutId()}" role="presentation">
								<a aria-labelledby="layout_${nav_item.getLayoutId()}" role="menuitem" href="${urlGroup + nav_item.getFriendlyURL()}">${nav_item.getName()}</a>
							</li>
						<#list nav_item.getChildren() as nav_child>
                            <#if !nav_child.isHidden()>
                                <#assign
                                    nav_child_attr_selected = ""
                                    nav_child_css_class = ""
                                />

                                <#if nav_item.isSelected(true, nav_item, nav_item.getAncestorPlid())>
                                    <#assign
                                        nav_child_attr_selected = "aria-selected='true'"
                                        nav_child_css_class = "selected"
                                    />
                                </#if>

                                <li ${nav_child_attr_selected} class="evr-main-navigation__submenu-item ${nav_child_css_class}" id="layout_${nav_child.getLayoutId()}" role="presentation" tabindex="0">
                                    <a aria-labelledby="layout_${nav_child.getLayoutId()}" class="evr-main-navigation__submenu-link" href="${urlGroup + nav_child.getFriendlyURL()}" ${nav_child.getTarget()} role="menuitem">${nav_child.getName()}</a>
                                </li>
                            </#if>
						</#list>
						</ul>
					</div>
					</li>
				<#else>
				<li ${nav_item_attr_selected} class="evr-main-navigation__item ${nav_item_css_class}" id="layout_${nav_item.getLayoutId()}" role="presentation">
					<a class="evr-main-navigation__link" aria-labelledby="layout_${nav_item.getLayoutId()}" ${nav_item_attr_has_popup} href="${urlGroup + nav_item.getFriendlyURL()}" ${nav_item.getTarget()} role="menuitem"><span><b><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</b></span></a>
				</li>
				</#if>
			</#if>
		</#list>
	</ul>
	</#if>
</nav>