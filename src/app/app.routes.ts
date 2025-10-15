import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home-page/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register-page/register-page.component').then((m) => m.RegisterPageComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login-page/login-page.component').then((m) => m.LoginPageComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/info/about-page/about-page.component').then((m) => m.AboutPageComponent),
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/users/user-list-page/user-list-page.component').then((m) => m.UserListPageComponent),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/users/user-profile-page/user-profile-page.component').then(
                (m) => m.UserProfilePageComponent,
              ),
          },
          {
            path: 'edit',
            loadComponent: () =>
              import('./features/users/user-edit-page/user-edit-page.component').then((m) => m.UserEditPageComponent),
          },
          {
            path: 'albums',
            loadComponent: () =>
              import('./features/users/user-albums-page/user-albums-page.component').then(
                (m) => m.UserAlbumsPageComponent,
              ),
          },
          {
            path: 'events',
            loadComponent: () =>
              import('./features/users/user-events-page/user-events-page.component').then(
                (m) => m.UserEventsPageComponent,
              ),
          },
          {
            path: 'groups',
            loadComponent: () =>
              import('./features/users/user-groups-page/user-groups-page.component').then(
                (m) => m.UserGroupsPageComponent,
              ),
          },
          {
            path: 'tickets',
            loadComponent: () =>
              import('./features/users/user-tickets-page/user-tickets-page.component').then(
                (m) => m.UserTicketsPageComponent,
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'groups',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/groups/group-list-page/group-list-page.component').then((m) => m.GroupListPageComponent),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./features/groups/group-create-page/group-create-page.component').then(
            (m) => m.GroupCreatePageComponent,
          ),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/groups/group-detail-page/group-detail-page.component').then(
                (m) => m.GroupDetailPageComponent,
              ),
          },
          {
            path: 'members',
            loadComponent: () =>
              import('./features/groups/group-members-page/group-members-page.component').then(
                (m) => m.GroupMembersPageComponent,
              ),
          },
          {
            path: 'events',
            loadComponent: () =>
              import('./features/groups/group-events-page/group-events-page.component').then(
                (m) => m.GroupEventsPageComponent,
              ),
          },
          {
            path: 'chat',
            loadComponent: () =>
              import('./features/groups/group-chat-page/group-chat-page.component').then((m) => m.GroupChatPageComponent),
          },
          {
            path: 'settings',
            loadComponent: () =>
              import('./features/groups/group-settings-page/group-settings-page.component').then(
                (m) => m.GroupSettingsPageComponent,
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'events',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/events/event-list-page/event-list-page.component').then((m) => m.EventListPageComponent),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./features/events/event-create-page/event-create-page.component').then(
            (m) => m.EventCreatePageComponent,
          ),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/events/event-detail-page/event-detail-page.component').then(
                (m) => m.EventDetailPageComponent,
              ),
          },
          {
            path: 'chat',
            loadComponent: () =>
              import('./features/events/event-chat-page/event-chat-page.component').then((m) => m.EventChatPageComponent),
          },
          {
            path: 'gallery',
            loadComponent: () =>
              import('./features/events/event-gallery-page/event-gallery-page.component').then(
                (m) => m.EventGalleryPageComponent,
              ),
          },
          {
            path: 'tickets',
            loadComponent: () =>
              import('./features/events/event-tickets-page/event-tickets-page.component').then(
                (m) => m.EventTicketsPageComponent,
              ),
          },
          {
            path: 'polls',
            loadComponent: () =>
              import('./features/events/event-polls-page/event-polls-page.component').then(
                (m) => m.EventPollsPageComponent,
              ),
          },
          {
            path: 'shopping-list',
            loadComponent: () =>
              import(
                './features/events/event-shopping-list-page/event-shopping-list-page.component'
              ).then((m) => m.EventShoppingListPageComponent),
          },
          {
            path: 'carpool',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('./features/events/event-carpool-page/event-carpool-page.component').then(
                    (m) => m.EventCarpoolPageComponent,
                  ),
              },
              {
                path: 'create',
                loadComponent: () =>
                  import(
                    './features/events/event-carpool-create-page/event-carpool-create-page.component'
                  ).then((m) => m.EventCarpoolCreatePageComponent),
              },
              {
                path: ':rideId',
                loadComponent: () =>
                  import(
                    './features/events/event-carpool-detail-page/event-carpool-detail-page.component'
                  ).then((m) => m.EventCarpoolDetailPageComponent),
              },
            ],
          },
          {
            path: 'statistics',
            loadComponent: () =>
              import('./features/events/event-statistics-page/event-statistics-page.component').then(
                (m) => m.EventStatisticsPageComponent,
              ),
          },
          {
            path: 'settings',
            loadComponent: () =>
              import('./features/events/event-settings-page/event-settings-page.component').then(
                (m) => m.EventSettingsPageComponent,
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'tickets',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/tickets/ticket-list-page/ticket-list-page.component').then(
            (m) => m.TicketListPageComponent,
          ),
      },
      {
        path: 'purchase',
        loadComponent: () =>
          import('./features/tickets/ticket-purchase-page/ticket-purchase-page.component').then(
            (m) => m.TicketPurchasePageComponent,
          ),
      },
      {
        path: 'confirmation',
        children: [
          {
            path: ':orderId',
            loadComponent: () =>
              import(
                './features/tickets/ticket-confirmation-page/ticket-confirmation-page.component'
              ).then((m) => m.TicketConfirmationPageComponent),
          },
        ],
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./features/tickets/ticket-detail-page/ticket-detail-page.component').then(
            (m) => m.TicketDetailPageComponent,
          ),
      },
    ],
  },
  {
    path: 'albums',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/albums/album-list-page/album-list-page.component').then((m) => m.AlbumListPageComponent),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./features/albums/album-create-page/album-create-page.component').then(
            (m) => m.AlbumCreatePageComponent,
          ),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/albums/album-detail-page/album-detail-page.component').then(
                (m) => m.AlbumDetailPageComponent,
              ),
          },
          {
            path: 'photos',
            children: [
              {
                path: ':photoId',
                loadComponent: () =>
                  import('./features/albums/album-photo-page/album-photo-page.component').then(
                    (m) => m.AlbumPhotoPageComponent,
                  ),
              },
            ],
          },
          {
            path: 'share',
            loadComponent: () =>
              import('./features/albums/album-share-page/album-share-page.component').then(
                (m) => m.AlbumSharePageComponent,
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'messages',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/messages/messages-page/messages-page.component').then((m) => m.MessagesPageComponent),
      },
      {
        path: 'inbox',
        loadComponent: () =>
          import('./features/messages/messages-inbox-page/messages-inbox-page.component').then(
            (m) => m.MessagesInboxPageComponent,
          ),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './features/messages/message-conversation-page/message-conversation-page.component'
              ).then((m) => m.MessageConversationPageComponent),
          },
          {
            path: 'reply',
            loadComponent: () =>
              import('./features/messages/message-reply-page/message-reply-page.component').then(
                (m) => m.MessageReplyPageComponent,
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/admin/admin-dashboard-page/admin-dashboard-page.component').then(
            (m) => m.AdminDashboardPageComponent,
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./features/admin/admin-users-page/admin-users-page.component').then(
            (m) => m.AdminUsersPageComponent,
          ),
      },
      {
        path: 'groups',
        loadComponent: () =>
          import('./features/admin/admin-groups-page/admin-groups-page.component').then(
            (m) => m.AdminGroupsPageComponent,
          ),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('./features/admin/admin-events-page/admin-events-page.component').then(
            (m) => m.AdminEventsPageComponent,
          ),
      },
      {
        path: 'config',
        children: [
          {
            path: 'lookup',
            loadComponent: () =>
              import('./features/admin/admin-config-lookup-page/admin-config-lookup-page.component').then(
                (m) => m.AdminConfigLookupPageComponent,
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./features/info/terms-page/terms-page.component').then((m) => m.TermsPageComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./features/info/privacy-page/privacy-page.component').then((m) => m.PrivacyPageComponent),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./features/info/support-page/support-page.component').then((m) => m.SupportPageComponent),
  },
];
