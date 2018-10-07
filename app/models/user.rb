class User < ApplicationRecord
  include RandomUid

  has_secure_password

  validates_presence_of :email
  validates_uniqueness_of :email
  validate :valid_email?
  validates :password, length: {minimum: 6}, allow_blank: true

  private def valid_email?
    if email.present?
      if !email.match /.*@.*\..*/
        errors.add(:email, 'must be valid')
      end
    end
  end
end
